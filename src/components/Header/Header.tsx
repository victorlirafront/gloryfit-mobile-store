import { StyledHeader, StyledSearchInput } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <StyledSearchInput type="search" placeholder="Pesquise" />
    </StyledHeader>
  );
}

export default Header;
