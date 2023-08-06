import { DEPENDENCY, DEV_DEPENDENCY } from 'constants/constants';
import { PackageJSONType } from 'types/packageJson';
import { extractUniqueElements } from './array';

/**
 * get package.json's URL in project
 */
export const getPackageJsonURL = (url: string) => {
  const PREFIX = 'https://raw.githubusercontent.com/';
  const SUFFIX = '/package.json';

  const modifyURL = (originalURL: string, segmentAfterHEAD: string) => {
    const treeRegex = /\/tree\/[^/]+/;
    const segmentRegex = /\/[^/]+/;
    const hasTree = originalURL.match(treeRegex);

    if (!hasTree) {
      return `${originalURL}/HEAD`;
    }

    const modifiedURL = originalURL.replace(treeRegex, '/HEAD');

    if (segmentAfterHEAD) {
      modifiedURL.replace(segmentRegex, `/${segmentAfterHEAD}`);
    }

    return modifiedURL;
  };

  let repositoryLocation = url.replace('https://github.com/', '');
  repositoryLocation = modifyURL(repositoryLocation, '');

  return PREFIX + repositoryLocation + SUFFIX;
};

/**
 * get `dependencies`, `devDependencies` in package.json
 */
export const getDependencies = (packageObj: PackageJSONType) => {
  let dependencies: string[] = [];
  let devDependencies: string[] = [];

  if (DEPENDENCY in packageObj) {
    dependencies = Object.keys(packageObj[DEPENDENCY]);
  }
  if (DEV_DEPENDENCY in packageObj) {
    devDependencies = Object.keys(packageObj[DEV_DEPENDENCY]);
  }

  return [...dependencies, ...devDependencies];
};

export const removeSubDirectories = (dependencies: string[]) => {
  const onlyStackName = dependencies.map((stk) =>
    stk.includes('/') ? stk.split('/')[0].substring(1) : stk,
  );

  return extractUniqueElements(onlyStackName);
};
