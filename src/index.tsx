import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import OFFERS_LIST from './mocks/offers';
import REVIEW_LIST from './mocks/reviews';
import { OFFER_COUNT } from './consts/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={OFFER_COUNT} offersList={OFFERS_LIST} reviewsList={REVIEW_LIST}/>
  </React.StrictMode>
);
