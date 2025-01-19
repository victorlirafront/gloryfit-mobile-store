import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 100px;
  color: #fff;
  background: #0f0f11;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
