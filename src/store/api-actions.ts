import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferList, TState, TUserData, TUserAuthorisation } from '../types';
import { fillOffers, setAuthorization, setOffersLoadedStatus } from './action';
import { AuthorizationStatus } from '../consts';

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


export const checkLogin = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checklogin',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const LoginAction = createAsyncThunk<void, TUserData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      await api.post<TUserAuthorisation>('/login', {email, password});
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

