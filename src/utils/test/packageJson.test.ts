import { getPackageJsonURL } from 'utils/packageJson';

describe('get package.json location from repository', () => {
  it('in multi repo, without slash at last', () => {
    const multiRepoUrl = 'https://github.com/msdio/stackticon';
    const packageFileInMultiRepo =
      'https://raw.githubusercontent.com/msdio/stackticon/HEAD/package.json';

    expect(getPackageJsonURL(multiRepoUrl)).toBe(packageFileInMultiRepo);
  });

  it('in multi repo, with slash at last', () => {
    const multiRepoUrl = 'https://github.com/msdio/stackticon/';
    const packageFileInMultiRepo =
      'https://raw.githubusercontent.com/msdio/stackticon/HEAD/package.json';

    expect(getPackageJsonURL(multiRepoUrl)).toBe(packageFileInMultiRepo);
  });

  it('in mono repo, without slash at last', () => {
    const monoRepoUrl = 'https://github.com/msdio/Tamago/tree/main/client';
    const packageFileInMonoRepo =
      'https://raw.githubusercontent.com/msdio/Tamago/HEAD/client/package.json';

    expect(getPackageJsonURL(monoRepoUrl)).toBe(packageFileInMonoRepo);
  });

  it('in mono repo, with slash at last', () => {
    const monoRepoUrl = 'https://github.com/msdio/Tamago/tree/main/client/';
    const packageFileInMonoRepo =
      'https://raw.githubusercontent.com/msdio/Tamago/HEAD/client/package.json';

    expect(getPackageJsonURL(monoRepoUrl)).toBe(packageFileInMonoRepo);
  });
});
