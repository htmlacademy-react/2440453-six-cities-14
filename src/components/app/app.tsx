import MainPage from '../../pages/main-page/main-page';
import { TOfferList, TReviewList } from '../../types';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus, ROUTE_LIST } from '../../consts';

type TAppProps = {
  offerCount: number;
  offersList: TOfferList;
  reviewsList: TReviewList;
}

function App ({offersList, reviewsList} : TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_LIST.Root} element={<MainPage offersList={offersList}/>}/>
        <Route path={ROUTE_LIST.Login} element={<LoginPage/>}/>
        <Route path={ROUTE_LIST.Favourites} element={<PrivateRoute authStatus={AuthorizationStatus.NoAuth}><FavoritesPage/></PrivateRoute> }/>
        <Route path={ROUTE_LIST.Offer} element={<OfferPage/>}/>
        <Route path={ROUTE_LIST.Unknown} element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
