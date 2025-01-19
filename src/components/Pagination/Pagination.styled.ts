import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin: 100px auto 100px auto;
  .arrow {
    background: transparent;
    border: none;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 15px;
    text-align: center;
    padding: 8px 0px;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(168, 36, 114);
    cursor: pointer;

    &.arrow-left {
    }

    &.arrow-right {
      transform: rotate(180deg);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  .page-count {
    color: #fff;
    padding: 0 40px;
  }
`;
