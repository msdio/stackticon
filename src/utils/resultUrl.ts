import { GITHUB_LINK } from 'constants/constants';

export const makeUrlIntoBracket = (url: string) => {
  return `[![stackticon](${url})](${GITHUB_LINK})`;
};

export const makeUrlIntoImgTag = (url: string) => {
  return `<a href="${GITHUB_LINK}"><img src="${url}" alt="stackticon" /></a>`;
};
