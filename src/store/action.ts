import { createAction } from '@reduxjs/toolkit';
import { TCityName, TOffer, TOfferList, TReviewList, TSortItem } from '../types';
import { AuthorizationStatus } from '../consts';

export const selectCity = createAction<{city: TCityName}>('city/selection');

export const fillOffers = createAction<TOfferList>('offers/fill');

export const changeSortItem = createAction<{item: TSortItem}>('sort/change');

export const setOffersLoadedStatus = createAction<boolean>('offers/loaded');

export const setError = createAction<string | null>('app/error');

export const setAuthorization = createAction<AuthorizationStatus>('user/setAuthorization');

export const setOffer = createAction<TOffer | null>('offer/setOffer');

export const setReviewsList = createAction<TReviewList | null>('offer/setReviewsList');

export const setNearest = createAction<TOfferList | null>('offer/getNearest');


