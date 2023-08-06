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
    const uniqueArray = ['emotion', ' mui', 'firebase', 'framer-motion', 'gh-pages'];

    expect(extractUniqueElements(original)).toEqual(uniqueArray);
  });

  it('get stacks which exists in our icon set', () => {
    const original = [
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/material',
      '@mui/system',
      'firebase',
      'framer-motion',
      'gh-pages',
      'html-to-image',
      'pretendard',
      'react',
      'react-dom',
      'react-ga4',
      'react-router-dom',
      'simple-icons',
      '@babel/core',
      '@testing-library/jest-dom',
      '@testing-library/react',
      '@testing-library/user-event',
      '@types/jest',
      '@types/node',
      '@types/react',
      '@types/react-dom',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      '@vitejs/plugin-react',
      'eslint',
      'eslint-config-prettier',
      'eslint-config-react',
      'eslint-config-react-app',
      'eslint-plugin-prettier',
      'eslint-plugin-react',
      'eslint-plugin-simple-import-sort',
      'eslint-plugin-unused-imports',
      'jest',
      'prettier',
      'ts-jest',
      'typescript',
      'vite',
      'vite-tsconfig-paths',
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
