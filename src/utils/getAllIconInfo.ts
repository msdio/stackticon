import * as icons from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';

export const makeIconInfoArray = () => {
  const iconArr: SimpleIcon[] = Object.values(icons);
  return iconArr;
};
