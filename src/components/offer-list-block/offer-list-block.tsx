import { useState } from 'react';
import { TCityName, TOfferList } from '../../types';
import Map from '../../components/map/map';
import OfferCardList from '../offer-card-list/offer-card-list';


type TOfferBlockProps = {
  offersList: TOfferList;
  cityName: TCityName;
}

function OfferListBlock ({offersList, cityName}: TOfferBlockProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<number>(0);
  const selectedOffersList = offersList.filter((offer) => offer.city.name === cityName);
  function handleMouseEnter(id:number) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(0);
  }
  // function handleMouseMove (e) {
  //   setActiveOfferId(e.target.value);
  // }
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <OfferCardList offersList={selectedOffersList} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        <Map offers={selectedOffersList} activeOfferId={activeOfferId} className='cities'/>
      </div>
    </div>
  );
}

export default OfferListBlock;
