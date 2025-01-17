import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 250px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #3d3d3d;
  border-radius: 5px;
  background: #0f0f11;
  color: #fff;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-self: end;

  &:focus {
    border-color: #14b04f;
  }
`;

export const StyledOption = styled.option`
  font-size: 16px;
  background-color: #fff;
  color: #333;

  &:hover {
    background-color: #14b04f;
    color: #fff;
  }
`;
