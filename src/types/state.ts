import { TCityName, TOffer, TOfferList } from '../types';
import { store } from '../store';
import { SORTING_TYPES, AuthorizationStatus } from '../consts';
import { TOfferReview } from './review';

export type TSortItem = typeof SORTING_TYPES[number];

export type TState = {
  city: TCityName;
  offers: TOfferList;
  sortItem: TSortItem;
  isOffersLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  offer: TOffer | null;
  reviews: TOfferReview[] | null;
  nearest: TOfferList | null;
}

export type TAppDispatch = typeof store.dispatch;
