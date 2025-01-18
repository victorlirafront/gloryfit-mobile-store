import { LOGO } from '@/constants/images';
import { StyledAside, StyledList, StyledListItem } from './Aside.styled';
import Image from 'next/image';
import useFetchData from '@/hooks/useFetchData';
import { fetchDataSuccess } from '@/redux/swapiSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Data } from '@/types/swapi';

function Aside() {
  const [category, setCategory] = useState<string>('people');
  const { data } = useFetchData<Data>(category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(fetchDataSuccess(data));
    }
  }, [data, dispatch, category]);

  const handleCategoryClick = (category: string) => {
    setCategory(category);
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
