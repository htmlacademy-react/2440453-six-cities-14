import { TOffer, TOfferList, TReviewList } from '../../types';
import Gallery from '../gallery/gallery';
import NearbyPlaces from '../nearby-places/nearby-places';
import OfferGoods from '../offer-goods/offer-goods';
import OfferHost from '../offer-host/offer-host';
import OfferReviewList from '../offer-review-list/offer-review-list';
import Map from '../map/map';
import { calcHiddenPremiumClass, calcRaitingPersent } from '../../utils';
import { MAX_NEARBY_PLACES_COUNT } from '../../consts';

type TOfferProps = {
  offer: TOffer;
  reviews: TReviewList | null;
  nearest: TOfferList | null;
}
function Offer({offer, reviews, nearest}: TOfferProps) : JSX.Element {
  const {title, type, rating, price, bedrooms, maxAdults, isPremium, images, goods, host, description} = offer;
  let isGoods, isHost = false;
  if (goods !== null && goods) {
    isGoods = true;
  }
  if (host) {
    isHost = true;
  }
  const ratPersent = calcRaitingPersent(rating);
  const classNamePremium = calcHiddenPremiumClass(isPremium, 'offer__mark');
  const nearbyOffers: TOfferList = [offer];
  if (nearest !== null && nearest) {
    nearest.forEach((item, i) => {
      if (i < MAX_NEARBY_PLACES_COUNT) {
        nearbyOffers.push(item);
      }
    });
  }
  console.log(nearbyOffers.length);
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        {<Gallery images={images}/>}
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className={classNamePremium}>
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: ratPersent}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            {isGoods && <OfferGoods goodsList={goods}/>}
            {isHost && <OfferHost host={host} text={title} desc={description}/>}
            <OfferReviewList reviewsList={reviews}/>
          </div>
        </div>
        <Map offers={nearbyOffers} activeOfferId={offer.id} className='offers' cityName={offer.city.name}/>
      </section>
      <NearbyPlaces offersList={nearest}/>
    </main>
  );
}

export default Offer;
