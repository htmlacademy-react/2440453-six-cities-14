import { SORTING_TYPES } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeSortItem } from '../../store/action';
import { TSortItem } from '../../types';
import SortItem from './sort-item';

function SortBlock() : JSX.Element {
  const dispatch = useAppDispatch();
  const handleItemClick = (sortItem: TSortItem) => {
    dispatch(changeSortItem({item: sortItem}));
  };
  const selectedSortItem = useAppSelector((state) => state.sortItem);
  const sortItems = SORTING_TYPES.map((item, i) => <SortItem name={item} tabIndex={i} isSelected={item === selectedSortItem} key={item} onClick={handleItemClick}/>);
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
