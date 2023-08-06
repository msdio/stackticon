import { allIconNames } from './allIconInfo';

export const extractUniqueElements = (skills: string[]) => {
  const uniqueArray = new Set(skills);

  return [...uniqueArray];
};

export const filterExisitingStacks = (array: string[]) => {
  const names = allIconNames();

  return array.filter((el) => names.has(el.replaceAll('-', '').toLowerCase()));
};

export const makeIntoSlugs = (stk: string) => {
  return stk.replaceAll('-', '').toLowerCase();
};
