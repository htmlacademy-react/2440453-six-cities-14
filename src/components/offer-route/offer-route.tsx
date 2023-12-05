import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTE_LIST } from '../../consts/const';
import OfferPage from '../../pages/offer-page/offer-page';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchNearestAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';

function OfferRoute(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearest = useAppSelector((state) => state.nearest);
  useEffect(() => {
    if (id) {
      const strId = id.toString();
      dispatch(fetchOfferAction(strId));
      dispatch(fetchReviewsAction(strId));
      dispatch(fetchNearestAction(strId));
    }
  }, [id]);
  return (
    offer ? <OfferPage offer={offer} reviews={reviews} nearest={nearest}/> : <Navigate to={ROUTE_LIST.Unknown}/>
  );
}

export default OfferRoute;
