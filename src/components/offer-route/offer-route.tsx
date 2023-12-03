import { Navigate, useParams } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts/const';
import { TOfferList } from '../../types';
import OfferPage from '../../pages/offer-page/offer-page';

type TOfferRouteProps = {
  offersList: TOfferList;
}

function OfferRoute({offersList}: TOfferRouteProps): JSX.Element {
  const {id} = useParams();
  const offer = offersList.find((item) => item.id === id);
  return (
    offer ? <OfferPage offer={offer}/> : <Navigate to={ROUTE_LIST.Unknown}/>
  );
}

export default OfferRoute;
