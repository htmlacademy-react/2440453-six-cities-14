import { createAction } from '@reduxjs/toolkit';
import { TCityName, TOfferList, TSortItem } from '../types';
import { AuthorizationStatus } from '../consts';

export const selectCity = createAction<{city: TCityName}>('city/selection');

export const fillOffers = createAction<TOfferList>('offers/fill');

export const changeSortItem = createAction<{item: TSortItem}>('sort/change');

export const setOffersLoadedStatus = createAction<boolean>('offers/loaded');

export const setError = createAction<string | null>('app/error');

export const setAuthorization = createAction<AuthorizationStatus>('user/setAuthorization');
