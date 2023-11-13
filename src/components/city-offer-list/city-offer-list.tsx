import LocationItem from '../../components/location-item/location-item';
import OfferCard from '../../components/offer-card/offer-card';
import { TCityName, TOfferList } from '../../types';

type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOfferList;
}

function CityOfferList({cityName, offersList}: TCityOfferListProps) : JSX.Element {
  const offers = offersList.map((item) => <OfferCard offer={item} key={item.id}/>);
  return (
    <li className="favorites__locations-items">
      <LocationItem cityName={cityName}/>;
      <div className="favorites__places">
        {offers}
      </div>
    </li>
  );
}

export default CityOfferList;
