import { MAX_NEARBY_PLACES_COUNT } from '../../consts';
import { TOfferList } from '../../types';
import OfferCard from '../offer-card/offer-card';

type TNearbyPlacesProps = {
  offersList: TOfferList | null;
}

function NearbyPlaces({offersList}: TNearbyPlacesProps) : JSX.Element {
  const offers = offersList !== null && offersList ? offersList.map((offer, i) => {
    if(i < MAX_NEARBY_PLACES_COUNT) {
      return <OfferCard offer={offer} key={offer.id}/>;
    }
  }) : '';
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
