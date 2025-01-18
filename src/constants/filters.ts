export const FILTERS = {
  people: {
    filterName: 'Gender Filter',
    options: ['male', 'female', 'all'],
  },
  planets: {
    filterName: 'Climate Filter',
    options: ['arid', 'temperate', 'frozen', 'all'],
  },
  films: {
    filterName: 'Director Filter',
    options: ['George Lucas', ' Irvin Kershner', 'Richard Marquand', 'all'],
  },
} as const;

export type CategoryKey = keyof typeof FILTERS;
