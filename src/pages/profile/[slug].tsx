import { SWAPI } from '@/constants/endpoints';
import { wrapper } from '@/redux/store';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { StyledProfile, StyledProfileWrapper } from './profile.styled';
import Image from 'next/image';
import { BACK_ARROW } from '@/constants/images';
import Link from 'next/link';
import { Film, Person, Planet } from '@/types/swapi';
import { ProfileProps } from './profile.types';

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

const Profile = ({ data }: ProfileProps) => {
  return (
    <StyledProfileWrapper>
      <StyledProfile>
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
          {renderProfileData(data)}
        </main>
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { slug } = context.params || {};

    if (!slug) {
      return {
        notFound: true,
      };
    }

    const category = store.getState().swapi.category;

    try {
      const { data } = await axios.get(`${SWAPI}/${category}/${slug}/`);

      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          data: null,
        },
      };
    }
  },
);

export default Profile;
