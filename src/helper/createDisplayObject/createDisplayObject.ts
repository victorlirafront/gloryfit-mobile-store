import { Person, Planet, Film } from '@/types/swapi';

interface DisplayObject {
  info_1: [string, string];
  info_2: [string, string];
  info_3: [string, string];
}

export function createDisplayObject(category: string, item: Person | Planet | Film): DisplayObject {
  const displayObject: DisplayObject = {
    info_1: ['', ''],
    info_2: ['', ''],
    info_3: ['', ''],
  };

  if (category === 'people' && 'name' && 'gender' && 'hair_color' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Gender', item.gender];
    displayObject.info_3 = ['Hair Color', item.hair_color];
  } else if (category === 'planets' && 'name' && 'diameter' && 'climate' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Diameter', item.diameter];
    displayObject.info_3 = ['Climate', item.climate];
  } else if (category === 'films' && 'title' && 'director' && 'opening_crawl' in item) {
    displayObject.info_1 = ['Title', item.title];
    displayObject.info_2 = ['Director', item.director];
    displayObject.info_3 = ['Opening Crawl', item.opening_crawl];
  }

  return displayObject;
}
