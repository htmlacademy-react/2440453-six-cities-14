import { SORTING_TYPES } from '../../consts';
import { TSortItem } from '../../types';
import SortItem from './sort-item';

type TSortProps = {
  selectedSortItem: TSortItem;
  onClick: (sortItem:TSortItem)=>void;
}

function SortBlock({selectedSortItem, onClick}:TSortProps) : JSX.Element {
  const sortItems = SORTING_TYPES.map((item, i) => <SortItem name={item} tabIndex={i} isSelected={item === selectedSortItem} key={item} onClick={onClick}/>);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortItems}
      </ul>
    </form>
  );
}

export default SortBlock;
