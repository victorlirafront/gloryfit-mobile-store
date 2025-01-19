import { Data } from '@/types/swapi';

export type PaginationProps = {
  data: Data;
  onFetchData: (url: string) => void;
};
