import { BACK_ARROW } from '@/constants/images';
import Link from 'next/link';
import {
  StyledDynamicInformations,
  StyledDynamicInformationsWrapper,
} from './DynamicInformations.styled';
import Image from 'next/image';
import { Person, Planet, Film } from '@/types/swapi';

type DynamicInformations = {
  data: Person | Planet | Film | null;
};

const renderProfileData = (data: Person | Planet | Film | null) => {
  if (!data) return <p>No data available</p>;

  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <p key={key} style={{ marginTop: 10 }}>
          <strong style={{ color: '#d2dd52' }}>{key}:</strong>{' '}
          {Array.isArray(value) ? (
            value.join(', ')
          ) : typeof value === 'string' && value.startsWith('http') ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      ))}
    </div>
  );
};

function DynamicInformations(props: DynamicInformations) {
  return (
    <StyledDynamicInformationsWrapper>
      <StyledDynamicInformations>
        <header className="profile-header">
          <Link href="/">
            <div className="back-arrow-wrapper">
              <Image
                className="profile-back-arrow"
                alt="arrow back"
                width={30}
                height={30}
                src={BACK_ARROW}
              />
              <p>Go back</p>
            </div>
          </Link>
        </header>
        <main className="profile-main">
          <h1>Details</h1>
          <div className="background-image"></div>
          {renderProfileData(props.data)}
        </main>
      </StyledDynamicInformations>
    </StyledDynamicInformationsWrapper>
  );
}

export default DynamicInformations;
