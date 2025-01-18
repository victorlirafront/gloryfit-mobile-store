import { StyledHeader, StyledSearchInput } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <StyledSearchInput type="search" placeholder="Pesquise" />
      </div>
    </StyledHeader>
  );
}

export default Header;
