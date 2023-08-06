import { capitalize } from 'utils/string';

test('capitalize first letter in given string', () => {
  const input = 'stackticon';

  expect(capitalize(input)).toBe('Stackticon');
});

describe('make string into slug', () => {
  it('which has hyphen', () => {
    const input = 'styled-components';

    expect(input).toBe('styledcomponents');
  });
});
