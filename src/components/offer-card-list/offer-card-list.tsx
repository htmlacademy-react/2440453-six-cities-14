import { TCityName, TOfferList } from '../../types';
import SortBlock from '../sort-block/sort-block';
import OfferCard from '../offer-card/offer-card';

type TOfferListProps = {
  offersList: TOfferList;
  city: TCityName;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: () => void;
}

function OfferCardList ({offersList, city, handleMouseEnter, handleMouseLeave}: TOfferListProps): JSX.Element {
  const offers = offersList.map((item) => <OfferCard offer={item} key={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}/>);
  const listHeader = offersList.length === 0 ? 'No places to stay available' : `${offersList.length} places to stay in ${city}`;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{listHeader}</b>
      {offersList.length > 0 && <SortBlock/>}
      <div className="cities__places-list places__list tabs__content">
        {offers}
      </div>
    </section>
  );
}

export default OfferCardList;
