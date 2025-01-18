import styled from 'styled-components';
import { STAR_WARS_CARD_IMAGE } from '../../constants/images';

export const StyledCard = styled.div`
  width: 270px;
  height: 400px;
  border: 1px solid #3d3d3d;
  margin: 10px;
  border-radius: 4px;
  transition: 0.2s;

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
`;
