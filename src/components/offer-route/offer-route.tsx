import { Navigate, useParams } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts/const';
import { TOfferList } from '../../types';
import OfferPage from '../../pages/offer-page/offer-page';

type PrivateRouteProps = {
  offersList: TOfferList;
}

function OfferRoute({offersList}: PrivateRouteProps): JSX.Element {
  const {id} = useParams();
  let numId = 0;
  if (id === undefined) {
    numId = -1;
  } else {
    numId = Number.parseInt(id, 10);
  }
  const offer = offersList.find((item) => item.id === numId);
  return (
    offer !== null && offer !== undefined ? <OfferPage offer={offer}/> : <Navigate to={ROUTE_LIST.Unknown}/>
  );
}

export default OfferRoute;
