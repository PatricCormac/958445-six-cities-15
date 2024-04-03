import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { clearToken, setToken } from '../services/token';
import {
  Error,
  State,
  AppDispatch,
  FullUserType,
  ShortOfferType,
} from '../types';
import {
  ApiRoutesEnum,
  AppRoutesEnum,
  AuthorizationStatusesEnum,
} from '../consts';
import {
  login,
  logout,
  addError,
  checkAuth,
  loadOffers,
  setDataLoadingStatus,
} from './action';

type AuthData = {
  login: string;
  password: string;
  navigate: (value: string) => void;
};

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  api
    .get(ApiRoutesEnum.LOGIN)
    .then(() => dispatch(checkAuth(AuthorizationStatusesEnum.AUTH)))
    .catch(() => dispatch(checkAuth(AuthorizationStatusesEnum.NO_AUTH)))
    .finally(() => dispatch(setDataLoadingStatus(false)));
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  ({ navigate, login: email, password }, { dispatch, extra: api }) => {
    api
      .post<FullUserType>(ApiRoutesEnum.LOGIN, {
        email,
        password,
      })
      .then(({ data }) => {
        setToken(data.token);

        navigate(AppRoutesEnum.HOME);
        dispatch(
          login({
            user: data,
            authorizationStatus: AuthorizationStatusesEnum.AUTH,
          })
        );
      })
      .catch((error: AxiosError<{ details: Error[] }>) => {
        error?.response?.data.details.map(({ property, messages }) =>
          dispatch(addError({ property, messages }))
        );
      });
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoutesEnum.LOGOUT);
  clearToken();
  dispatch(logout(AuthorizationStatusesEnum.NO_AUTH));
});

export const loadOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/loadOffers', (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  api
    .get<ShortOfferType[]>(ApiRoutesEnum.OFFERS)
    .then(({ data }) => {
      dispatch(loadOffers(data));
    })
    .finally(() => dispatch(setDataLoadingStatus(false)));
});
