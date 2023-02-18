import CustomIconsJson from 'constants/custom-icons.json';
import type { SimpleIcon } from 'simple-icons';

const prefix = '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="';
const preMid = '"><title>';
const middle = '</title><path d="';
const suffix = '"/></svg>';

interface CustomIconProps {
  viewBox: string;
}

interface CustomObjectProps {
  [key: string]: SimpleIcon & CustomIconProps;
}

export const customIconArray: (SimpleIcon & CustomIconProps)[] = CustomIconsJson.map((obj) => ({
  ...obj,
  get svg() {
    return prefix + this.viewBox + preMid + this.title + middle + this.path + suffix;
  },
  source: '',
  guidelines: void 0,
  license: void 0,
}));

export const customIconObject: CustomObjectProps = {};
CustomIconsJson.forEach((item) => {
  const key = 'si' + item.title;
  const value: SimpleIcon & CustomIconProps = {
    ...item,
    get svg() {
      return prefix + this.viewBox + preMid + this.title + middle + this.path + suffix;
    },
    source: '',
    guidelines: void 0,
    license: void 0,
  };

  customIconObject[key] = value;
});
