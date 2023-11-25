import { TReview } from '../../types';
import { calcRaitingPersent } from '../../utils';

type TReviewProps = {
  review: TReview;
}
//      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
function OfferReview ({review}: TReviewProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const ratPersent = calcRaitingPersent(rating);
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratPersent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toString()}>{date.toString()}</time>
      </div>
    </li>
  );
}

export default OfferReview;
