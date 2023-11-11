const ROUTE_LIST = {
  'Root' : '/',
  'Unknown' : '*',
  'Favourites' : '/favorites',
  'Login' : '/login',
  'Offer' : '/offer/:id',
} as const;


const CITI_LIST = ['Amsterdam', 'Brussels', 'Dusseldorf', 'Hamburg', 'Cologne', 'Paris'] as const;

export {
  ROUTE_LIST,
  CITI_LIST,
};

