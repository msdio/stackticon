export const capitalize = (input: string) => {
  return input[0].toUpperCase() + input.slice(1);
};

export const makeIntoSlug = (stk: string) => {
  return stk.replaceAll('-', '').toLowerCase();
};
