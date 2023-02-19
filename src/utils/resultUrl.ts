export const makeUrlIntoBracket = (url: string) => {
  return `[![stackticon](${url})](https://github.com/msdio/stackticon)`;
};

export const makeUrlIntoImgTag = (url: string) => {
  return `<a href="https://github.com/msdio/stackticon"><img src="${url}" alt="stackticon" /></a>`;
};
