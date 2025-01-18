import { Person, Planet, Film } from '@/types/swapi';

interface DisplayObject {
  info_1: string;
  info_2: string;
  info_3: string;
}

export function createDisplayObject(category: string, item: Person | Planet | Film): DisplayObject {
  const displayObject: DisplayObject = {
    info_1: '',
    info_2: '',
    info_3: '',
  };

  if (category === 'people' && 'name' in item && 'gender' in item) {
    displayObject.info_1 = item.name;
    displayObject.info_2 = item.gender;
  } else if (category === 'planets' && 'name' in item && 'diameter' in item) {
    displayObject.info_1 = item.name;
    displayObject.info_2 = item.diameter;
  } else if (category === 'films' && 'title' in item && 'director' in item) {
    displayObject.info_1 = item.title;
    displayObject.info_2 = item.director;
  }

  return displayObject;
}
