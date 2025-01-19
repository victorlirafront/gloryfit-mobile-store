import dateFormatter from '@/helper/dateFormatter/dateFormatter';
import { StyledCard } from './Card.styled';
import { CardProps } from './Card.types';
import router from 'next/router';
import { extractIdFromUrl } from '@/helper/extractIdFromUrl/extractIdFromUrl';

function Card({ category, textColor, heading, secondElement, thirdElement, date, url }: CardProps) {
  const routeName = extractIdFromUrl(url);

  const handleClick = () => {
    router.push(`profile/${routeName}?category=${category}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <div className="card-image"></div>
      <div className="body-post">
        <div className="category-wrapper">
          <p className="post-date">{dateFormatter(date)}</p>
          <p className="post-category" style={{ color: textColor }}>
            {category}
          </p>
        </div>
        <div className="informations">
          <p>
            <span>{heading[0]}</span>: {heading[1]}
          </p>
          <p>
            <span>{secondElement[0]}</span>: {secondElement[1]}
          </p>
          <p>
            <span>{thirdElement[0]}</span>: {thirdElement[1]}
          </p>
        </div>
        <button className="button">Read More</button>
      </div>
    </StyledCard>
  );
}

export default Card;
