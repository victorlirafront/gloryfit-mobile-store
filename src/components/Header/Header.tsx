import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { StyledHeader, StyledSearchInput } from './Header.styled';

function Header() {
  const category = useSelector((state: RootState) => state.swapi.category);
  return (
    <StyledHeader>
      <div className="container">
        <StyledSearchInput type="search" placeholder={`Search for ${category}`} />
      </div>
    </StyledHeader>
  );
}

export default Header;
