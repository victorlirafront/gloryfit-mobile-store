import SelectCategory from '../SelectCategory/SelectCategory';
import { StyledGenderFilter } from './GenderFilter.styled';
import { GenderFilterProps } from './GenderFIlter.types';

function GenderFilter(props: GenderFilterProps) {
  return (
    <StyledGenderFilter data-aos="fade-up" data-aos-duration="600">
      <div className="container">
        <SelectCategory onCategoryFilter={props.onCategoryFilter} />
      </div>
    </StyledGenderFilter>
  );
}

export default GenderFilter;
