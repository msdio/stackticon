export const extractDependencies = (packageObj: any) => {
  const dependencies = Object.keys(packageObj['dependencies']);
  const devDependencies = Object.keys(packageObj['devDependencies']);

  return [...dependencies, ...devDependencies];
};

export const refineSkills = (stacks: string[]) => {
  const refined: string[] = [];

  stacks.forEach((stk) => {
    stk.includes('/') ? refined.push(stk.slice(1, stk.indexOf('/'))) : refined.push(stk);
  });

  return refined;
};
