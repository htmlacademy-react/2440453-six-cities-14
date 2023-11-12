import MainPage from '../../pages/main-page/main-page';
import { TOfferList } from '../../types';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus, CITY_LIST, ROUTE_LIST } from '../../consts';
import OfferRoute from '../offer-route/offer-route';
import { HelmetProvider } from 'react-helmet-async';

type TAppProps = {
  offersList: TOfferList;
}

function App ({offersList} : TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_LIST.Root} element={<MainPage offersList={offersList}/>}/>
          <Route path={ROUTE_LIST.Login} element={<LoginPage/>}/>
          <Route path={ROUTE_LIST.Favourites} element={<PrivateRoute authStatus={AuthorizationStatus.Auth}><FavoritesPage offersList={offersList} cityList={CITY_LIST}/></PrivateRoute> }/>
          <Route path={ROUTE_LIST.Offer} element={<OfferRoute offersList={offersList}/>}/>
          <Route path={ROUTE_LIST.Unknown} element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
