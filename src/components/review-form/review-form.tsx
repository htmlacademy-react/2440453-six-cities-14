import { useState, ChangeEvent } from 'react';
import { RATING } from '../../consts';
import RaitingInput from './rating-input';

function ReviewForm() : JSX.Element {//TODO: повторное нажатие + валидация введенных данных
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');

  function handleTextChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setReviewText(e.target.value);
  }

  function handleRatingChange(e:ChangeEvent<HTMLInputElement>) {
    setRating(e.target.value);
  }

  const ratings = Object.entries(RATING).reverse().map(([key, value]) => (<RaitingInput key={value} value={value.toString()} title={key.toString()} checked={value.toString() === rating} onChange={handleRatingChange}/>));
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange}>{reviewText}</textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
