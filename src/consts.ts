import { City as CityType } from './types';

export enum AuthorizationStatusesEnum {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum AppRoutesEnum {
  HOME = '/',
  ROUTE_STAR = '*',
  LOGIN = '/login',
  OFFER = '/offer',
  FAVORITES = '/favorites',
}

export enum SortTypesEnum {
  POPULAR = 'Popular',
  PRICE_TO_HIGH = 'Price: low to high',
  PRICE_TO_LOW = 'Price: high to low',
  RATED_FIRST = 'Top rated first',
}

export enum ApiRoutesEnum {
  LOGIN = '/login',
  LOGOUT = '/logout',
  OFFERS = '/offers',
  COMMENTS = '/comments',
  FAVORITE = '/favorite',
}

export const CITIES: CityType[] = [
  {
    name: 'Paris',
    location: {
      zoom: 13,
      latitude: 48.85661,
      longitude: 2.351499,
    },
  },
  {
    name: 'Cologne',
    location: {
      zoom: 13,
      latitude: 50.938361,
      longitude: 6.959974,
    },
  },
  {
    name: 'Brussels',
    location: {
      zoom: 13,
      latitude: 50.846557,
      longitude: 4.351697,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      zoom: 13,
      latitude: 52.37454,
      longitude: 4.897976,
    },
  },
  {
    name: 'Hamburg',
    location: {
      zoom: 13,
      latitude: 53.550341,
      longitude: 10.000654,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      zoom: 13,
      latitude: 51.225402,
      longitude: 6.776314,
    },
  },
];

export enum NameSpace {
  City = 'CITY',
  User = 'USER',
  Offers = 'OFFERS',
}
