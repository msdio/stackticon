import { makeUrlIntoBracket, makeUrlIntoImgTag } from 'utils/resultUrl';

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
