import { LOGO } from '@/constants/images';
import { StyledAside, StyledList, StyledListItem } from './Aside.styled';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/redux/swapiSlice';

function Aside() {
  const dispatch = useDispatch();

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
  };

  return (
    <StyledAside>
      <div className="aside-container">
        <div className="logo-wrapper">
          <Image src={LOGO} alt="HunterStack Logo" width={50} height={44} priority />
        </div>
        <p className="catetory-text">Categorias</p>
        <StyledList>
          <StyledListItem onClick={() => handleCategoryClick('people')}>Pessoas</StyledListItem>
          <StyledListItem onClick={() => handleCategoryClick('films')}>Filmes</StyledListItem>
          <StyledListItem onClick={() => handleCategoryClick('planets')}>Planetas</StyledListItem>
        </StyledList>
      </div>
    </StyledAside>
  );
}

export default Aside;
