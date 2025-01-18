import { LOGO } from '@/constants/images';
import { StyledAside, StyledList, StyledListItem } from './Aside.styled';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/redux/swapiSlice';
import { useState } from 'react';
import { scrollToTop } from '@/helper/scrollToTop/scrollToTop';

function Aside() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>('people');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    scrollToTop();
    dispatch(setCategory(category));
  };

  return (
    <StyledAside>
      <div className="aside-container">
        <div className="logo-wrapper">
          <Image src={LOGO} alt="HunterStack Logo" width={50} height={44} priority />
        </div>
        <p className="catetory-text">Categories</p>
        <StyledList>
          <StyledListItem
            onClick={() => handleCategoryClick('people')}
            className={`item ${selectedCategory === 'people' ? 'active' : ''}`}
          >
            People
          </StyledListItem>
          <StyledListItem
            onClick={() => handleCategoryClick('films')}
            className={`item ${selectedCategory === 'films' ? 'active' : ''}`}
          >
            Films
          </StyledListItem>
          <StyledListItem
            onClick={() => handleCategoryClick('planets')}
            className={`item ${selectedCategory === 'planets' ? 'active' : ''}`}
          >
            Planets
          </StyledListItem>
        </StyledList>
      </div>
    </StyledAside>
  );
}

export default Aside;
