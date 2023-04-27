import type { SimpleIcon } from 'simple-icons';
import * as icons from 'simple-icons';

import { customIconArray, customIconObject } from './customIconObjects';

export const makeIconInfoArray = () => {
  const iconArr: SimpleIcon[] = Object.values(icons);
  const customIconArr: SimpleIcon[] = customIconArray;

  const allIconArr = [...iconArr, ...customIconArr];
  return allIconArr;
};

export const getIconDetail = (target: string) => {
  const allIconArr = { ...icons, ...customIconObject };

  const iconKey = ('si' + target) as keyof typeof allIconArr;

  return allIconArr[iconKey];
};

export const allIconNames = () => {
  const allIcons: any[] = makeIconInfoArray();

  return allIcons.reduce((allNames: Set<string>, curIcon: SimpleIcon) => {
    allNames.add(curIcon['slug']);

    return allNames;
  }, new Set());
};
