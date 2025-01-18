export const getCategoryTextColor = (category: string): string => {
  const categoryTextColors: { [key: string]: string } = {
    people: '#d2dd52',
    films: '#14b04f',
    planets: '#ff7a7a',
  };

  return categoryTextColors[category] || '#fff';
};
