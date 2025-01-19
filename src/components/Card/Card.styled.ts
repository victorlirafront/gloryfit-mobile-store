import styled from 'styled-components';
import { STAR_WARS_CARD_IMAGE } from '../../constants/images';

export const StyledCard = styled.div`
  width: 370px;
  border: 1px solid #3d3d3d;
  margin: 10px;
  border-radius: 4px;
  transition: 0.2s;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.03);
  }

  .card-image {
    height: 200px;
    width: 100%;
    background-image: url(${STAR_WARS_CARD_IMAGE});
    background-size: cover;
    background-position: center;
  }

  .body-post {
    padding: 20px;
    flex: 1;
    height: 100%;
    .category-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 8px;
      color: #fff;

      .post-date {
        text-align: start;
        width: 100%;
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 10px;
      }

      .post-category {
        font-size: 12px;
        transition: 0.2s;
        color: rgb(158, 192, 250);
      }
    }

    .informations {
      color: #fff;

      p {
        margin-top: 10px;
        line-height: 22px;
        span {
          color: #d2dd52;
        }

        font-size: 16px;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }

  .button {
    width: 100%;
    padding: 10px 10px;
    cursor: pointer;
    background: #14b04f;
    color: #fff;
    border: none;
    font-weight: bolder;
    margin-top: 20px;
    font-size: 16px;
    border-radius: 4px;
    transition: 0.4s;

    &:hover {
      background: rgb(16, 156, 70);
    }
  }
`;
