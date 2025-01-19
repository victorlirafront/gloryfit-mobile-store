import dateFormatter from '@/helper/dateFormatter/dateFormatter';
import { StyledCard } from './Card.styled';
import { CardProps } from './Card.types';

function Card({ category, textColor, info_1, info_2, info_3, info_4 }: CardProps) {
  return (
    <StyledCard>
      <div className="card-image"></div>
      <div className="body-post">
        <div className="category-wrapper">
          <p className="post-date">{dateFormatter(info_4)}</p>
          <p className="post-category" style={{ color: textColor }}>
            {category}
          </p>
        </div>
        <div className="informations">
          <p>
            <span>{info_1[0]}</span>: {info_1[1]}
          </p>
          <p>
            <span>{info_2[0]}</span>: {info_2[1]}
          </p>
          <p>
            <span>{info_3[0]}</span>: {info_3[1]}
          </p>
        </div>
        <button className="button">Visualizar</button>
      </div>
    </StyledCard>
  );
}

export default Card;
