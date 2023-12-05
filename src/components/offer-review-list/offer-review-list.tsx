import { TReviewList } from '../../types';
import OfferReview from '../offer-review/offer-review';
import ReviewForm from '../review-form/review-form';

type TOfferReviewListProps = {
  reviewsList: TReviewList | null;
}

function OfferReviewList({reviewsList}: TOfferReviewListProps) : JSX.Element {//TODO: каждый отзыв - отдельный компонент. И кажется создание
  const reviews = reviewsList !== null ? reviewsList.map((review) => <OfferReview review={review} key={review.id}/>) : '';
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default OfferReviewList;
