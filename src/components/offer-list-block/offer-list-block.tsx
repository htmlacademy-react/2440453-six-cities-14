import { useState } from 'react';
import { TOfferList } from '../../types';
import Map from '../../components/map/map';
import OfferCardList from '../offer-card-list/offer-card-list';


type TOfferBlockProps = {
  offersList: TOfferList;
}

function OfferListBlock ({offersList}: TOfferBlockProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(null);


  function handleMouseEnter(id:number) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }
  // function handleMouseMove (e) {
  //   setActiveOfferId(e.target.value);
  // }
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <OfferCardList offersList={offersList} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        <Map/>
      </div>
    </div>
  );
}

export default OfferListBlock;
