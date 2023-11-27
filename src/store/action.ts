import { createAction } from '@reduxjs/toolkit';
import { TCityName, TSortItem } from '../types';

export const selectCity = createAction<{city: TCityName}>('city/selection');

export const fillOffers = createAction('offers/fill');

export const changeSortItem = createAction<{item: TSortItem}>('sort/change');

