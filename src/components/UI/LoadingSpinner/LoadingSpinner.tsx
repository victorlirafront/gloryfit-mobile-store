import Image from 'next/image';
import { LOADING_SPINNER } from '@/constants/images';
import { StyledLoadingSpinner } from './LoadingSpinner.styled';

export function LoadingSpinner() {
  return (
    <StyledLoadingSpinner>
      <Image
        className="loading-spinner"
        alt="loading spinner"
        width={100}
        height={100}
        src={LOADING_SPINNER}
      />
    </StyledLoadingSpinner>
  );
}
