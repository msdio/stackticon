import type { SimpleIcon } from 'simple-icons';
import * as icons from 'simple-icons';

import { customIconArray } from './customIconObjects';

export const makeIconInfoArray = () => {
  const iconArr: SimpleIcon[] = Object.values(icons);
  const customIconArr: SimpleIcon[] = customIconArray;

  const allIconArr = [...iconArr, ...customIconArr];
  return allIconArr;
};
