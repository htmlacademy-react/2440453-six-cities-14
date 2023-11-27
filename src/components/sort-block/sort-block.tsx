import { useState } from 'react';
import { SORTING_TYPES } from '../../consts';
import { TSortItem } from '../../types';
import SortItem from './sort-item';

type TSortProps = {
  selectedSortItem: TSortItem;
  onClick: (sortItem:TSortItem)=>void;
}

function SortBlock({selectedSortItem, onClick}:TSortProps) : JSX.Element {
  const [menuStatus, setMenuStatus] = useState<string>('places__options--closed');
  const handleClickArrow = () => {
    if (menuStatus === 'places__options--opened') {
      setMenuStatus('places__options--closed');
    } else {
      setMenuStatus('places__options--opened');
    }
  };
  const sortItems = SORTING_TYPES.map((item, i) => <SortItem name={item} tabIndex={i} isSelected={item === selectedSortItem} key={item} onClick={onClick}/>);
  return (
    <form className="places__sorting" action="#" method="get" onClick={handleClickArrow}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${menuStatus}`}>
        {sortItems}
      </ul>
    </form>
  );
}

export default SortBlock;
