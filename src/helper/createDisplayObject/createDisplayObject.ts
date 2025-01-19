import { Person, Planet, Film } from '@/types/swapi';
import { truncateText } from '../truncateText/truncateText';

interface DisplayObject {
  heading: [string, string];
  secondElement: [string, string];
  thirdElement: [string, string];
  date: string;
  url: string;
}

export function createDisplayObject(category: string, item: Person | Planet | Film): DisplayObject {
  const displayObject: DisplayObject = {
    heading: ['', ''],
    secondElement: ['', ''],
    thirdElement: ['', ''],
    date: '',
    url: '',
  };

  if (
    category === 'people' &&
    'name' in item &&
    'gender' in item &&
    'hair_color' in item &&
    'url' in item
  ) {
    displayObject.heading = ['Name', item.name];
    displayObject.secondElement = ['Gender', item.gender];
    displayObject.thirdElement = ['Hair Color', item.hair_color];
    displayObject.date = item.created;
    displayObject.url = item.url;
  } else if (
    category === 'planets' &&
    'name' in item &&
    'diameter' in item &&
    'climate' in item &&
    'url' in item
  ) {
    displayObject.heading = ['Name', item.name];
    displayObject.secondElement = ['Diameter', item.diameter];
    displayObject.thirdElement = ['Climate', item.climate];
    displayObject.date = item.created;
    displayObject.url = item.url;
  } else if (
    category === 'films' &&
    'title' in item &&
    'director' in item &&
    'opening_crawl' in item &&
    'url' in item
  ) {
    displayObject.heading = ['Title', item.title];
    displayObject.secondElement = ['Director', item.director];
    displayObject.thirdElement = ['Opening Crawl', truncateText(item.opening_crawl)];
    displayObject.date = item.created;
    displayObject.url = item.url;
  }

  return displayObject;
}
