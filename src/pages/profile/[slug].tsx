import { SWAPI } from '@/constants/endpoints';
import { wrapper } from '@/redux/store';
import { Data } from '@/types/swapi';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface DynamicPageProps {
  slug: string;
  data: Data;
}

const DynamicPage = ({ data }: DynamicPageProps) => {
  return (
    <div style={{ color: '#fff' }}>
      <p color="#fff">Data fetched: {JSON.stringify(data)}</p>
    </div>
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

export default DynamicPage;
