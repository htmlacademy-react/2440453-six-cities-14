import { TCityName } from '../../types';
import NavigationCity from './nav-city';
import { CITY_LIST } from '../../consts';

type TNavProps = {
  selectedCity: TCityName;
  onClick: () => void;
}

function NavigationTabs({selectedCity, onClick}: TNavProps) : JSX.Element {
  const cities = CITY_LIST.map((city) => {
    const isSelected = city === selectedCity;
    return(<NavigationCity isSelected={isSelected} city={city} onClick={onClick} key={city}/>);
  });
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities}
          </ul>
        </section>
      </div>
    </>
  );
}

export default NavigationTabs;
