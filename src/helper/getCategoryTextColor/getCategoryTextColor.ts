export const getCategoryTextColor = (category: string): string => {
  const categoryTextColors: { [key: string]: string } = {
    people: 'orange',
    films: '#14b04f',
    planets: '#ff7a7a',
  };

  return categoryTextColors[category] || '#fff';
};
