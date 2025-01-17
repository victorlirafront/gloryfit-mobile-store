import { LOGO } from '@/constants/images';
import { StyledAside } from './Aside.styled';
import Image from 'next/image';

function Aside() {
  return (
    <StyledAside>
      <div>
        <Image src={LOGO} alt="HunterStack Logo" width={50} height={44} priority />
      </div>
    </StyledAside>
  );
}

export default Aside;
