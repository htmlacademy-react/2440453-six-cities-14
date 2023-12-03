import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST, SORTING_TYPES } from '../consts';
import { changeSortItem, fillOffers, selectCity, setOffersLoadedStatus } from './action';
import { TState } from '../types';

const initialState: TState = {
  city: CITY_LIST[0],
  offers: [],
  sortItem: SORTING_TYPES[0],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = createReducer(initialState, (builder) => {
  builder.addCase(selectCity, (state, action) => {
    state.city = action.payload.city;
  });
  builder.addCase(fillOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(changeSortItem, (state, action) => {
    state.sortItem = action.payload.item;
  });
  builder.addCase(setOffersLoadedStatus, (state, action) => {
    state.isOffersLoaded = action.payload;
  });
}
);

export {reducer};
