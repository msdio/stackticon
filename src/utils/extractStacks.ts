export const extractDependencies = (packageObj: any) => {
  const dependencies = Object.keys(packageObj['dependencies']);
  const devDependencies = Object.keys(packageObj['devDependencies']);

  return [...dependencies, ...devDependencies];
};

export const refineSkills = (stacks: string[]) => {
  const refined = new Set();

  stacks.forEach((stk) => {
    stk.includes('/') ? refined.add(stk.slice(1, stk.indexOf('/'))) : refined.add(stk);
  });

  return refined;
};
