import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { StyledSelect, StyledOption } from './SelectCategory.styled';
import { FILTERS, CategoryKey } from '@/constants/filters';
import { handleSelectChangeProps } from './SelectCategory.types';

function SelectCategory(props: handleSelectChangeProps) {
  const category = useSelector((state: RootState) => state.swapi.category) as CategoryKey;
  const currentFilter = FILTERS[category];

  if (!currentFilter) {
    return null;
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = String(event.target.value);
    props.onCategoryFilter(selectedValue);
  };

  return (
    <StyledSelect
      name={currentFilter.filterName}
      id={`${category}-filter`}
      onChange={handleSelectChange}
    >
      <StyledOption disabled selected>
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
