import { CITY_LIST } from '../consts';
import { TLocation } from '.';

export type TCityName = typeof CITY_LIST[number];

export type TCity = {
  location: TLocation;
  name: TCityName;
}

