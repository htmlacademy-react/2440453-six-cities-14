import { TCityName, TOfferList } from '../types';
import { store } from '../store';

export type TState = {
  city: TCityName;
  offers: TOfferList;
}

export type TAppDispatch = typeof store.dispatch;
