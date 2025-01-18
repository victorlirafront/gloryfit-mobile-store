import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #0f0f11;
  height: 100px;
  width: 100%;
  color: #fff;
  padding: 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
`;

export const StyledSearchInput = styled.input.attrs({ type: 'search' })`
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

  &:focus {
    border: 2px solid #14b04f;
    background-color: #2a2a2e;
  }

  &::placeholder {
    color: #fff;
    font-style: italic;
  }
`;
