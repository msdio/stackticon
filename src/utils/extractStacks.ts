import { DEPENDENCY, DEV_DEPENDENCY } from 'constants/constants';
import type { PackageJSONType } from 'types/packageJson';

import { extractUniqueElements } from './array';

export const extractDependencies = (packageObj: PackageJSONType) => {
  let dependencies: string[] = [];
  let devDependencies: string[] = [];

  if (DEPENDENCY in packageObj) {
    dependencies = Object.keys(packageObj[DEPENDENCY]);
  }
  if (DEV_DEPENDENCY in packageObj) {
    devDependencies = Object.keys(packageObj[DEV_DEPENDENCY]);
  }

  return [...dependencies, ...devDependencies];
};

export const refineSkills = (skills: string[]) => {
  const refined: string[] = [];

  skills.forEach((stk) => {
    stk.includes('/') ? refined.push(stk.slice(1, stk.indexOf('/'))) : refined.push(stk);
  });

  return extractUniqueElements(refined);
};
