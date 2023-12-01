import { TSortItem } from '../../types';

type TSortItemProps = {
  name: TSortItem;
  tabIndex: number;
  isSelected: boolean;
  onClick: (sortItem: TSortItem) => void;
};


function SortItem ({name, tabIndex, isSelected, onClick}:TSortItemProps): JSX.Element {
  const className = `places__option ${isSelected ? ' places__option--active' : ''}`;
  return (
    <li className={className} tabIndex={tabIndex} onClick={() => onClick(name)}>{name}</li>
  );
}

export default SortItem;
