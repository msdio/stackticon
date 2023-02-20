import * as icons from 'simple-icons';

import { customIconObject } from './customIconObjects';

export const getSimpleIconInfo = (target: string) => {
  const allIconArr = { ...icons, ...customIconObject };

  const iconKey = ('si' + target) as keyof typeof allIconArr;

  return allIconArr[iconKey];
};
