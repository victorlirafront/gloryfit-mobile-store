import { Data } from '@/types/swapi';

export function filterData(selectedFilter: string, category: string, data: Data) {
  if (selectedFilter === 'all') {
    return null;
  }

  const normalize = (value: string | null): string => {
    if (!value) return '';

    return value
      .replace(/\s+/g, ' ')
      .replace(/^\s+|\s+$/g, '')
      .toLowerCase();
  };

  const getFilterField = (item: any): string | null => {
    switch (category) {
      case 'people':
        return item.gender;
      case 'planets':
        return item.climate;
      case 'films':
        return item.director;
      default:
        return null;
    }
  };

  const filtered = data?.results.filter((item) => {
    const normalizedItemField = normalize(getFilterField(item));
    const normalizedFilter = normalize(selectedFilter);
    return normalizedItemField === normalizedFilter;
  });

  return filtered;
}
