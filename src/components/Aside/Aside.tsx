import { LOGO } from '@/constants/images';
import { StyledAside, StyledList, StyledListItem } from './Aside.styled';
import Image from 'next/image';

function Aside() {
  return (
    <StyledAside>
      <div className="logo-wrapper">
        <Image src={LOGO} alt="HunterStack Logo" width={50} height={44} priority />
      </div>
      <p className="catetory-text">Categorias</p>
      <StyledList>
        <StyledListItem>Pessoas</StyledListItem>
        <StyledListItem>Filmes</StyledListItem>
        <StyledListItem>Planetas</StyledListItem>
      </StyledList>
    </StyledAside>
  );
}

export default Aside;
