export const extractDependencies = (packageObj: any) => {
  const dependencies = Object.keys(packageObj['dependencies']);
  const devDependencies = Object.keys(packageObj['devDependencies']);

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
