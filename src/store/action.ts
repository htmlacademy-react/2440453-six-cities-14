import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types';

export const selectCity = createAction<{city: TCityName}>('city/selection');

export const fillOffers = createAction('offers/fill');

