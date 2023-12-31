import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { CITY_LIST, ROUTE_LIST } from '../../consts';
import OfferRoute from '../offer-route/offer-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/hooks';
import { checkLogin, fetchOffersList} from '../../store/api-actions';
import { store } from '../../store';

store.dispatch(fetchOffersList());
store.dispatch(checkLogin());

function App (): JSX.Element {

  const offersList = useAppSelector((state) => state.offers);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_LIST.Root} element={<MainPage offersList={offersList}/>}/>
          <Route path={ROUTE_LIST.Login} element={<LoginPage/>}/>
          <Route path={ROUTE_LIST.Favourites} element={<PrivateRoute authStatus={authStatus}><FavoritesPage offersList={offersList} cityList={CITY_LIST}/></PrivateRoute> }/>
          <Route path={ROUTE_LIST.Offer} element={<OfferRoute offersList={offersList}/>}/>
          <Route path={ROUTE_LIST.Unknown} element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
