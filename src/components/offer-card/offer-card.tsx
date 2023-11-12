import { TOffer } from '../../types/offer';

type TOfferCardProps = {
  offer: TOffer;
  key: number;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

function OfferCard({offer, key, onMouseEnter, onMouseLeave}: TOfferCardProps):JSX.Element {//TODO: премиум и favourites добавить как дойдем до классов
  const {title, previewImage, type, rating, price, isPremium} = offer;
  const ratPersent = +rating * 100 / 5.0; //? в общую функцию мб, пригодится для большого оффера
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  const classNamePremium = `place-card__mark${classHiddenPremium}`;
  return (
    <article className="cities__card place-card" data-id={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={classNamePremium}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
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
            <span style={{width: `${ratPersent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default OfferCard;
