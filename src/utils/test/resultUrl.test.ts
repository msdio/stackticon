import {
  getPackageJSONFromRepository,
  makeUrlIntoBracket,
  makeUrlIntoImgTag,
} from 'utils/resultUrl';

describe('url copy result', () => {
  const url = 'https://image-url';

  it('copy option : copy for readme', () => {
    const copyForReadme = makeUrlIntoBracket(url);

    expect(copyForReadme).toBe(`[![stackticon](${url})](https://github.com/msdio/stackticon)`);
  });

  it('copy option: copy with img tag', () => {
    const copyWithImgTag = makeUrlIntoImgTag(url);

    expect(copyWithImgTag).toBe(
      `<a href="https://github.com/msdio/stackticon"><img src="${url}" alt="stackticon" /></a>`,
    );
  });
});

describe('get package.json location from repository', () => {
  it('in multi repo, without slash at last', () => {
    const multiRepoUrl = 'https://github.com/msdio/stackticon';
    const packageFileInMultiRepo =
      'https://raw.githubusercontent.com/msdio/stackticon/main/package.json';

    expect(getPackageJSONFromRepository(multiRepoUrl)).toBe(packageFileInMultiRepo);
  });

  it('in multi repo, with slash at last', () => {
    const multiRepoUrl = 'https://github.com/msdio/stackticon/';
    const packageFileInMultiRepo =
      'https://raw.githubusercontent.com/msdio/stackticon/main/package.json';

    expect(getPackageJSONFromRepository(multiRepoUrl)).toBe(packageFileInMultiRepo);
  });

  it('in mono repo, without slash at last', () => {
    const monoRepoUrl = 'https://github.com/msdio/Tamago/tree/main/client';
    const packageFileInMonoRepo =
      'https://raw.githubusercontent.com/msdio/Tamago/main/client/package.json';

    expect(getPackageJSONFromRepository(monoRepoUrl)).toBe(packageFileInMonoRepo);
  });

  it('in mono repo, with slash at last', () => {
    const monoRepoUrl = 'https://github.com/msdio/Tamago/tree/main/client/';
    const packageFileInMonoRepo =
      'https://raw.githubusercontent.com/msdio/Tamago/main/client/package.json';

    expect(getPackageJSONFromRepository(monoRepoUrl)).toBe(packageFileInMonoRepo);
  });
});
