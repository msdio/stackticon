import * as icons from 'simple-icons';

import { customIconArray, customIconObject } from './customIconObjects';

import type { SimpleIcon } from 'simple-icons';

export const makeIconInfoArray = () => {
  const iconArr = Object.values(icons) as SimpleIcon[];
  const customIconArr = customIconArray;

  const allIconArr = [...iconArr, ...customIconArr];
  return allIconArr;
};

export const getIconDetail = (target: string) => {
  const allIconArr = { ...icons, ...customIconObject };

  const iconKey = ('si' + target) as keyof typeof allIconArr;

  return allIconArr[iconKey] as SimpleIcon;
};

export const allIconNames = () => {
  const allIcons = makeIconInfoArray();

  const iconSlugs = new Set<string>();
  allIcons.forEach((icon) => iconSlugs.add(icon.slug));

  return iconSlugs;
};
