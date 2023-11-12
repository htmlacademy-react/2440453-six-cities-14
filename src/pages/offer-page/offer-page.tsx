import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import NearbyPlaces from '../../components/nerby-places/nearby-places';
import Offer from '../../components/offer/offer';
import { TOffer } from '../../types';

//? мб стоит выделить весь мейн как компонент оффер. Тогда места поблизости будут в том компоненте

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
      <main className="page__main page__main--offer">
        <Offer offer={offer}/>
        <NearbyPlaces/>
      </main>
    </div>
  );
}

export default OfferPage;
