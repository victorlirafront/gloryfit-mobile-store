import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { StyledSelect, StyledOption } from './SelectCategory.styled';
import { FILTERS, CategoryKey } from '@/constants/filters';

function SelectCategory() {
  const category = useSelector((state: RootState) => state.swapi.category) as CategoryKey;
  const currentFilter = FILTERS[category];

  if (!currentFilter) {
    return null;
  }

  return (
    <StyledSelect name={currentFilter.filterName} id={`${category}-filter`}>
      <StyledOption value="" disabled selected>
        {currentFilter.filterName}
      </StyledOption>
      {currentFilter.options.map((option) => (
        <StyledOption key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export default SelectCategory;
