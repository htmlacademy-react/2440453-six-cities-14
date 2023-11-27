import { createReducer } from '@reduxjs/toolkit';
import { CITY_LIST, SORTING_TYPES } from '../consts';
import { changeSortItem, fillOffers, selectCity } from './action';
import { TState } from '../types';
import OFFERS_LIST from '../mocks/offers';

const initialState: TState = {
  city: CITY_LIST[5],
  offers: [],
  sortItem: SORTING_TYPES[0],
};


const reducer = createReducer(initialState, (builder) => {
  builder.addCase(selectCity, (state, action) => {
    state.city = action.payload.city;
  });
  builder.addCase(fillOffers, (state) => {
    state.offers = OFFERS_LIST;
  });
  builder.addCase(changeSortItem, (state, action) => {
    state.sortItem = action.payload.item;
  });
}
);

export {reducer};
