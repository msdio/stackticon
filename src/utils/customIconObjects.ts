import type { SimpleIcon } from 'simple-icons';

import CustomIconsJson from '../constants/custom-icons.json';

const PREFIX = '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="';
const PREMID = '"><title>';
const MIDDLE = '</title><path d="';
const SUFFIX = '"/></svg>';

interface CustomIconProps {
  viewBox: string;
}

interface CustomObjectProps {
  [key: string]: SimpleIcon & CustomIconProps;
}

export const customIconArray: (SimpleIcon & CustomIconProps)[] = CustomIconsJson.map((obj) => ({
  ...obj,
  get svg() {
    return PREFIX + this.viewBox + PREMID + this.title + MIDDLE + this.path + SUFFIX;
  },
  source: '',
  guidelines: void 0,
  license: void 0,
}));

export const customIconObject: CustomObjectProps = {};
CustomIconsJson.forEach((item) => {
  const key =
    'si' + item.slug.substring(0, 1).toUpperCase() + item.slug.substring(1, item.slug.length);
  const value: SimpleIcon & CustomIconProps = {
    ...item,
    get svg() {
      return PREFIX + this.viewBox + PREMID + this.title + MIDDLE + this.path + SUFFIX;
    },
    source: '',
    guidelines: void 0,
    license: void 0,
  };

  customIconObject[key] = value;
});
