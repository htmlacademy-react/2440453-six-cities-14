import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import OFFERS_LIST from './mocks/offers';
import REVIEW_LIST from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersList={OFFERS_LIST} reviewsList={REVIEW_LIST}/>
  </React.StrictMode>
);
