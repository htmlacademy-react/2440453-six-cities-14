import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TOfferList, TState, TUserData, TUserAuthorisation, TOffer, TReviewList } from '../types';
import { fillOffers, setAuthorization, setOffersLoadedStatus, setOffer, setReviewsList, setNearest } from './action';
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
    dispatch(setOffer(null));
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


export const LogoutAction = createAsyncThunk<void, TUserData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      await api.post<TUserAuthorisation>('/login', {email, password});
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);


export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offer/load',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<TOffer>(`/offers/${id}`);
      dispatch(setOffer(data));
    } catch {
      dispatch(setOffer(null));
    }
  }
);


export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'reviews/load',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<TReviewList>(`/comments/${id}`);
      dispatch(setReviewsList(data));
    } catch {
      dispatch(setReviewsList(null));
    }
  }
);


export const fetchNearestAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offer/nearest',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<TOfferList>(`/offers/${id}/nearby`);
      dispatch(setNearest(data));
    } catch {
      dispatch(setNearest(null));
    }
  }
);
