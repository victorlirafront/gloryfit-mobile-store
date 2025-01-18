import dateFormatter from '@/helper/dateFormatter/dateFormatter';
import { StyledCard } from './Card.styled';
import { CardProps } from './Card.types';

function Card({ category, textColor }: CardProps) {
  return (
    <StyledCard>
      <div className="card-image"></div>
      <div className="body-post">
        <div className="category-wrapper">
          <p className="post-date">{dateFormatter('2014-12-09T13:50:51.644000Z')}</p>
          <p className="post-category" style={{ color: textColor }}>
            {category}
          </p>
        </div>
        <div className="informations"></div>
        <button className="button">Visualizar</button>
      </div>
    </StyledCard>
  );
}

export default Card;
