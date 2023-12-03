import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferList, TState } from '../types';
import { fillOffers, setOffersLoadedStatus } from './action';

export const fetchOffersList = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadedStatus(true));
    const {data} = await api.get<TOfferList>('/offers');
    dispatch(setOffersLoadedStatus(false));
    dispatch(fillOffers(data));
  }
);
