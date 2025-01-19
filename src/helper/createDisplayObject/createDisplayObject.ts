import { Person, Planet, Film } from '@/types/swapi';
import { truncateText } from '../truncateText/truncateText';

interface DisplayObject {
  info_1: [string, string];
  info_2: [string, string];
  info_3: [string, string];
  info_4: string;
}

export function createDisplayObject(category: string, item: Person | Planet | Film): DisplayObject {
  const displayObject: DisplayObject = {
    info_1: ['', ''],
    info_2: ['', ''],
    info_3: ['', ''],
    info_4: '',
  };

  if (category === 'people' && 'name' in item && 'gender' in item && 'hair_color' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Gender', item.gender];
    displayObject.info_3 = ['Hair Color', item.hair_color];
    displayObject.info_4 = item.created;
  } else if (category === 'planets' && 'name' in item && 'diameter' in item && 'climate' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Diameter', item.diameter];
    displayObject.info_3 = ['Climate', item.climate];
    displayObject.info_4 = item.created;
  } else if (
    category === 'films' &&
    'title' in item &&
    'director' in item &&
    'opening_crawl' in item
  ) {
    displayObject.info_1 = ['Title', item.title];
    displayObject.info_2 = ['Director', item.director];
    displayObject.info_3 = ['Opening Crawl', truncateText(item.opening_crawl)];
    displayObject.info_4 = item.created;
  }

  return displayObject;
}
