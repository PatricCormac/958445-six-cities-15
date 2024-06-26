import { useMemo } from 'react';

import { SortTypesEnum } from '../../consts';
import type { ShortOfferType } from '../../types';

export function useSortOffers(
  offers: ShortOfferType[],
  sortType?: SortTypesEnum
): ShortOfferType[] {
  return useMemo(() => {
    switch (sortType) {
      case SortTypesEnum.POPULAR:
        return offers;

      case SortTypesEnum.PRICE_TO_HIGH:
        return offers.sort((a, b) => a.price - b.price);

      case SortTypesEnum.PRICE_TO_LOW:
        return offers.sort((a, b) => b.price - a.price);

      case SortTypesEnum.RATED_FIRST:
        return offers.sort((a, b) => b.rating - a.rating);

      default:
        return offers;
    }
  }, [offers, sortType]);
}
