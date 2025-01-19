import { Film, Person, Planet } from '@/types/swapi';

export type ProfileProps = {
  data: Person | Planet | Film | null;
};
