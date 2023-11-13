import { TOfferList } from '../../types';
import SortBlock from '../sort-block/sort-block';
import OfferCard from '../offer-card/offer-card';

type TOfferListProps = {
  offersList: TOfferList;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: () => void;
}

function OfferCardList ({offersList, handleMouseEnter, handleMouseLeave}: TOfferListProps): JSX.Element {
  const offers = offersList.map((item) => <OfferCard offer={item} key={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}/>);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersList.length} places to stay in Amsterdam</b>
      <SortBlock/>
      <div className="cities__places-list places__list tabs__content">
        {offers}
      </div>
    </section>
  );
}

export default OfferCardList;
