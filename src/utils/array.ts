import { allIconNames } from './allIconInfo';
import { makeIntoSlugs } from './string';

export const extractUniqueElements = (skills: string[]) => {
  const uniqueArray = new Set(skills);

  return [...uniqueArray];
};

export const filterExisitingStacks = (array: string[]) => {
  const names = allIconNames();

  return array.filter((el) => names.has(makeIntoSlugs(el)));
};
