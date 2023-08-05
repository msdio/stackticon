export const extractUniqueElements = (skills: string[]) => {
  const uniqueArray = new Set(skills);

  return [...uniqueArray];
};
