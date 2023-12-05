import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Offer from '../../components/offer/offer';
import { TOffer, TOfferList, TReviewList } from '../../types';

type TOfferPageProps = {
  offer: TOffer;
  reviews: TReviewList | null;
  nearest: TOfferList | null;
}

function OfferPage ({offer, reviews, nearest}: TOfferPageProps) : JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${offer.title}`}</title>
      </Helmet>
      <Header/>
      <Offer offer={offer} reviews={reviews} nearest={nearest}/>
    </div>
  );
}

export default OfferPage;
