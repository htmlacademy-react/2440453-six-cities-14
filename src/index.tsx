import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFER_COUNT, OFFERS_LIST } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount={OFFER_COUNT} offersList={OFFERS_LIST}/>
  </React.StrictMode>
);
