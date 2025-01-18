import SelectCategory from '../SelectCategory/SelectCategory';
import { StyledGenderFilter } from './GenderFilter.styled';
import { GenderFilterProps } from './GenderFIlter.types';

function GenderFilter(props: GenderFilterProps) {
  return (
    <StyledGenderFilter>
      <div className="container">
        <SelectCategory onCategoryFilter={props.onCategoryFilter} />
      </div>
    </StyledGenderFilter>
  );
}

export default GenderFilter;
