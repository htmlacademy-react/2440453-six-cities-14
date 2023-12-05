import { ChangeEventHandler } from 'react';

type TRaitingInputProps = {
  value: string;
  title: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function RaitingInput({value, title, checked, onChange}: TRaitingInputProps) : JSX.Element {
  const name = `${value}-star`;
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={value} id={name} type="radio" checked={checked} onChange={onChange}/>
      <label htmlFor={name} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RaitingInput;
