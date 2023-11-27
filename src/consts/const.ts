import { TCity } from '../types';

const ROUTE_LIST = {
  'Root' : '/',
  'Unknown' : '*',
  'Favourites' : '/favorites',
  'Login' : '/login',
  'Offer' : '/offer/:id',
} as const;

const SORTING_TYPES = [
  'Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'
] as const;


const CITY_LIST = ['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris'] as const;

const CITIES_LIST:TCity[] = [
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
  },
];

export {
  ROUTE_LIST,
  CITY_LIST,
  CITIES_LIST,
  SORTING_TYPES,
};

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

