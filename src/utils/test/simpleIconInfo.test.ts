import { getSimpleIconInfo } from '../../utils/simpleIconInfo';

test('get accurate icon object', () => {
  const converted = getSimpleIconInfo('Reactrouter');

  expect(converted.title).toBe('React Router');
  expect(converted.slug).toBe('reactrouter');
});
