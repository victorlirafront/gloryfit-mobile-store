export const FILTERS = {
  people: {
    filterName: 'Gender Filter',
    options: ['male', 'female'],
  },
  planets: {
    filterName: 'Planets Filter',
    options: ['Tatooine', 'Alderaan', 'Hoth'],
  },
  films: {
    filterName: 'Director Filter',
    options: ['George Lucas'],
  },
} as const;

export type CategoryKey = keyof typeof FILTERS;
