import type { SimpleIcon } from 'simple-icons';

import customIcons from '../../constants/custom-icons.json';
import { getIconDetail, makeIconInfoArray } from '../allIconInfo';

describe('check custom icons', () => {
  let allIconArr: SimpleIcon[];

  beforeAll(() => {
    allIconArr = makeIconInfoArray();
  });

  it('check last added icon title', () => {
    const lastCustomIcon = allIconArr.at(-1);
    const lastAddedIcon = Object.values(customIcons).at(-1);

    expect(lastCustomIcon?.title).toBe(lastAddedIcon?.title);
  });

  it('check slug according to the title', () => {
    const lastAddedIcon = Object.values(customIcons).at(-1);

    const removedSpaces = lastAddedIcon?.title.replaceAll(' ', '') ?? '';
    const makeSlug = removedSpaces?.charAt(0).toLowerCase() + removedSpaces?.slice(1);

    expect(lastAddedIcon?.slug).toBe(makeSlug);
  });
});

test('get accurate icon object', () => {
  const converted = getIconDetail('Reactrouter');

  expect(converted.title).toBe('React Router');
  expect(converted.slug).toBe('reactrouter');
});
