const ROUTE_LIST = {
  'Root' : '/',
  'Unknown' : '*',
  'Favourites' : '/favorites',
  'Login' : '/login',
  'Offer' : '/offer/:id',
} as const;


const CITY_LIST = ['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris'] as const;

export {
  ROUTE_LIST,
  CITY_LIST,
};

