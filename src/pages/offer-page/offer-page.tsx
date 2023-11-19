import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Offer from '../../components/offer/offer';
import { TOffer } from '../../types';

type TOfferPageProps = {
  offer: TOffer;
}

function OfferPage ({offer}: TOfferPageProps) : JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${offer.title}`}</title>
      </Helmet>
      <Header/>
      <Offer offer={offer}/>
    </div>
  );
}

export default OfferPage;
