import { Person, Planet, Film } from '@/types/swapi';

interface DisplayObject {
  info_1: [string, string];
  info_2: [string, string];
}

export function createDisplayObject(category: string, item: Person | Planet | Film): DisplayObject {
  const displayObject: DisplayObject = {
    info_1: ['', ''],
    info_2: ['', ''],
  };

  if (category === 'people' && 'name' in item && 'gender' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Gender', item.gender];
  } else if (category === 'planets' && 'name' in item && 'diameter' in item) {
    displayObject.info_1 = ['Name', item.name];
    displayObject.info_2 = ['Diameter', item.diameter];
  } else if (category === 'films' && 'title' in item && 'director' in item) {
    displayObject.info_1 = ['Title', item.title];
    displayObject.info_2 = ['Director', item.director];
  }

  return displayObject;
}
