import styled from 'styled-components';
import { StyledHeader } from './Header.styled';

const StyledSearchInput = styled.input.attrs({ type: 'search' })`
  width: 250px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #3d3d3d;
  border-radius: 5px;
  outline: none;
  background-color: #0f0f11;
  color: #fff;
  transition: all 0.3s ease;
  display: flex;
  justify-self: end;

  &:focus {
    border: 2px solid #14b04f;
    background-color: #2a2a2e;
  }

  &::placeholder {
    color: #fff;
    font-style: italic;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledSearchInput type="search" placeholder="Pesquise" />
    </StyledHeader>
  );
}

export default Header;
