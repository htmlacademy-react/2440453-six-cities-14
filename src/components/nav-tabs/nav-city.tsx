import { TCityName } from '../../types';

type TNavCityProps = {
  isSelected: boolean;
  city: TCityName;
  onClick: (selectCity: boolean, newCity: TCityName) => void;
}

function NavigationCity({isSelected, city, onClick}:TNavCityProps) {
  const className = `locations__item-link tabs__item ${isSelected ? ' tabs__item--active' : ''}`;
  return (
    <li className="locations__item">
      <div className={className} onClick={() => onClick(isSelected, city)}>
        <span>{city}</span>
      </div>
    </li>
  );
}

export default NavigationCity;
