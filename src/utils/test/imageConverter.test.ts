import { htmlToPng } from 'utils/imageConverter';

describe('convert html to image', () => {
  it('check when given html is null', async () => {
    const html = {
      current: null,
    };

    const res = await htmlToPng(html);
    expect(res).toBe(undefined);
  });
});
