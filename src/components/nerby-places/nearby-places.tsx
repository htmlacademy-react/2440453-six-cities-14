import { TOfferList } from '../../types';
import OfferCard from '../offer-card/offer-card';

type TNearbyPlacesProps = {
  offersList: TOfferList;
}

function NearbyPlaces({offersList}: TNearbyPlacesProps) : JSX.Element {
  const offers = offersList.map((offer) => <OfferCard offer={offer} key={offer.id}/>);
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers}
        </div>
      </section>
    </div>
  );
}

export default NearbyPlaces;
