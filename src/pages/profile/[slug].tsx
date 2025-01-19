import { SWAPI } from '@/constants/endpoints';
import { wrapper } from '@/redux/store';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import DynamicInformations from '@/components/DynamicInformations/DynamicInformations';
import { ProfileProps } from '@/components/DynamicInformations/DynamicInformations.types';

const Profile = ({ data }: ProfileProps) => {
  return <DynamicInformations data={data} />;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  () => async (context) => {
    const { slug } = context.params || {};
    const { category } = context.query || {};

    if (!slug) {
      return {
        notFound: true,
      };
    }

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
