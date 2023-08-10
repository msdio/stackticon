import { extractUniqueElements, filterExisitingStacks } from 'utils/array';

describe('Array util test', () => {
  it('remove duplicate elements', () => {
    const original = [
      'emotion',
      'emotion',
      'emotion',
      'mui',
      'firebase',
      'firebase',
      'framer-motion',
      'framer-motion',
      'framer-motion',
      'gh-pages',
      'gh-pages',
    ];
    const uniqueArray = ['emotion', 'mui', 'firebase', 'framer-motion', 'gh-pages'];

    expect(extractUniqueElements(original)).toEqual(uniqueArray);
  });

  it('get stacks which are in our icon set', () => {
    const original = [
      'emotion',
      'mui',
      'firebase',
      'framermotion',
      'ghpages',
      'htmltoimage',
      'pretendard',
      'react',
      'reactdom',
      'reactga4',
      'reactrouterdom',
      'simpleicons',
      'babel',
      'testinglibrary',
      'types',
      'typescripteslint',
      'vitejs',
      'eslint',
      'eslintconfigprettier',
      'eslintconfigreact',
      'eslintconfigreactapp',
      'eslintpluginprettier',
      'eslintpluginreact',
      'eslintpluginsimpleimportsort',
      'eslintpluginunusedimports',
      'jest',
      'prettier',
      'tsjest',
      'typescript',
      'vite',
      'vitetsconfigpaths',
    ];

    const filteredArray = [
      'emotion',
      'mui',
      'firebase',
      'react',
      'simpleicons',
      'babel',
      'testinglibrary',
      'eslint',
      'jest',
      'prettier',
      'typescript',
      'vite',
    ];

    expect(filterExisitingStacks(original)).toEqual(filteredArray);
  });
});
