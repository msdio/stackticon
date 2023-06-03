import { DEPENDENCY, DEV_DEPENDENCY } from 'constants/constants';
import type { PackageJSONType } from 'types/packageJson';

export const extractDependencies = (packageObj: PackageJSONType) => {
  const dependencies = Object.keys(packageObj[DEPENDENCY]);

  let devDependencies: string[] = [];
  if (DEV_DEPENDENCY in packageObj) {
    devDependencies = Object.keys(packageObj[DEV_DEPENDENCY]);
  }

  return [...dependencies, ...devDependencies];
};

export const extractUniqueElements = (skills: string[]) => {
  return new Set(skills);
};

export const refineSkills = (skills: string[]) => {
  const refined: string[] = [];

  skills.forEach((stk) => {
    stk.includes('/') ? refined.push(stk.slice(1, stk.indexOf('/'))) : refined.push(stk);
  });

  return extractUniqueElements(refined);
};
