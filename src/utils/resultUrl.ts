import { GITHUB_LINK } from 'constants/constants';

export const makeUrlIntoBracket = (url: string) => {
  return `[![stackticon](${url})](${GITHUB_LINK})`;
};

export const makeUrlIntoImgTag = (url: string) => {
  return `<a href="${GITHUB_LINK}"><img src="${url}" alt="stackticon" /></a>`;
};

export const getPackageJSONFromRepository = (url: string) => {
  const PREFIX = 'https://raw.githubusercontent.com/';
  const SUFFIX = '/package.json';

  let repositoryLocation = url.replace('https://github.com/', '').replace('tree/', '');

  if (repositoryLocation.at(-1) === '/') {
    repositoryLocation = repositoryLocation.slice(0, -1);
  }

  if (!repositoryLocation.includes('/main')) {
    repositoryLocation = repositoryLocation.concat('/main');
  }

  return PREFIX + repositoryLocation + SUFFIX;
};
