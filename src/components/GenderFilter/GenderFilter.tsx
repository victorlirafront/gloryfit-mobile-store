import SelectCategory from '../SelectCategory/SelectCategory';
import { StyledGenderFilter } from './GenderFilter.styled';

function GenderFilter() {
  return (
    <StyledGenderFilter>
      <div className="container">
        <SelectCategory />
      </div>
    </StyledGenderFilter>
  );
}

export default GenderFilter;
