import { TCityName, TOfferList } from '../types';
import { store } from '../store';
import { SORTING_TYPES } from '../consts';

export type TSortItem = typeof SORTING_TYPES[number];

export type TState = {
  city: TCityName;
  offers: TOfferList;
  sortItem: TSortItem;
  isOffersLoaded: boolean;
}

export type TAppDispatch = typeof store.dispatch;
