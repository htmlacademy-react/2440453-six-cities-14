import { createReducer } from '@reduxjs/toolkit';
import { CITY_LIST } from '../consts';
import { fillOffers, selectCity } from './action';
import { TState } from '../types';
import OFFERS_LIST from '../mocks/offers';

const initialState: TState = {
  city: CITY_LIST[5],
  offers: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder.addCase(selectCity, (state, action) => {
    state.city = action.payload.city;
  });
  builder.addCase(fillOffers, (state) => {
    state.offers = OFFERS_LIST;
  });
}
);

export {reducer};
