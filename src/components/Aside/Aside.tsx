import { LOGO } from '@/constants/images';
import { StyledAside, StyledList, StyledListItem } from './Aside.styled';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/redux/swapiSlice';
import { useState } from 'react';
import { scrollToTop } from '@/helper/scrollToTop/scrollToTop';
import { AsideProps } from './Aside.types';

function Aside({ className }: AsideProps) {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>('people');

  const handleCategoryClick = (category: string) => {
    scrollToTop();
    setSelectedCategory(category);
    dispatch(setCategory(category));
  };

  return (
    <StyledAside className={className}>
      <div className="aside-container">
        <div className="logo-wrapper" data-aos="fade-right" data-aos-duration="600">
          <Image src={LOGO} alt="HunterStack Logo" width={50} height={44} priority />
        </div>
        <p className="catetory-text" data-aos="fade-right" data-aos-duration="600">
          Categories
        </p>
        <StyledList data-aos="fade-right" data-aos-duration="600">
          <StyledListItem
            onClick={() => handleCategoryClick('people')}
            className={`item ${selectedCategory === 'people' ? 'active' : ''}`}
          >
            <p>People</p>
          </StyledListItem>
          <StyledListItem
            onClick={() => handleCategoryClick('planets')}
            className={`item ${selectedCategory === 'planets' ? 'active' : ''}`}
          >
            <p>Planets</p>
          </StyledListItem>
          <StyledListItem
            onClick={() => handleCategoryClick('films')}
            className={`item ${selectedCategory === 'films' ? 'active' : ''}`}
          >
            <p>Films</p>
          </StyledListItem>
        </StyledList>
      </div>
    </StyledAside>
  );
}

export default Aside;
