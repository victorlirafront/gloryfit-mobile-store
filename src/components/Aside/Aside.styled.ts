import styled from 'styled-components';

export const StyledAside = styled.aside`
  background: #0f0f11;
  min-height: 100%;
  width: 300px;
  border-right: 1px solid #3d3d3d;
  color: #fff;
  position: relative;
  transition: 0.4s;

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 3;
    margin-top: 79px;
    border-top: 2px solid #3d3d3d;
  }

  &.disabled {
    margin-left: -300px;
  }

  .aside-container {
    position: fixed;
    width: 300px;
  }

  .logo-wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 30px;
    @media screen and (max-width: 425px) {
      padding: 20px;
    }
  }

  .catetory-text {
    padding: 0 47px;
    font-size: 14px;
    margin: 30px 0 20px 0;
    @media screen and (max-width: 425px) {
      padding: 16px 0 16px 38px;
      margin: 0;
      margin-left: 20px;
    }
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #333;
  @media screen and (max-width: 425px) {
    width: 200px;
    padding-left: 20px;
  }
`;

export const StyledListItem = styled.li`
  margin: 0 auto;
  background-color: #14b04f;
  margin: 8px auto;
  padding: 15px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  color: #fff;
  border: 1px solid #3d3d3d;
  border-radius: 40px;
  width: 250px;
  transition: 0.2s;
  color: #fff;
  font-weight: bolder;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media screen and (max-width: 425px) {
    width: 200px;
  }

  &:hover {
    border: 1px solid #0aa043;
    transform: scale(1.03);
    background: #0aa043;
  }

  &.active {
    background: #3b66c9;
    border: 1px solid #fff;
  }

  .circle {
    width: 10px;
    height: 10px;
    background: #fff;
    margin-right: 10px;
    border-radius: 100%;
  }
`;
