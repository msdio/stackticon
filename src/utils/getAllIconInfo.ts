import * as icons from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';

const getAllIconInfo = () => {
  if (icons) {
    return icons;
  }
  throw new Error('에러가 발생했습니다. 아이콘 정보를 가져오지 못했습니다');
};

export const makeIconInfoArray = () => {
  const iconObj = getAllIconInfo();
  const iconArr: SimpleIcon[] = Object.values(iconObj);
  return iconArr;
};
