import { TOfferLight } from '../../types/offer';
import { Link } from 'react-router-dom';
import { calcHiddenPremiumClass, calcRaitingPersent } from '../../utils';

type TOfferCardProps = {
  offer: TOfferLight;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

function OfferCard({offer, onMouseEnter, onMouseLeave}: TOfferCardProps) : JSX.Element {//TODO: премиум и favourites добавить как дойдем до классов
  const {title, previewImage, type, rating, price, isPremium, id} = offer;
  const ratPersent = calcRaitingPersent(rating);
  const classNamePremium = calcHiddenPremiumClass(isPremium, 'place-card__mark');
  return (
    <article className="cities__card place-card" data-id={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={classNamePremium}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratPersent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default OfferCard;
