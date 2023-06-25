export const APP_NAME = 'stackticon';

export const GITHUB_LINK = 'https://github.com/msdio/stackticon';

export const DEPENDENCY = 'dependencies';
export const DEV_DEPENDENCY = 'devDependencies';

export type CopyOptionType = 'copy for readme' | 'copy link only' | 'copy img tag';
export const COPY_OPTIONS: { [key: string]: CopyOptionType } = {
  COPY_README: 'copy for readme',
  COPY_LINK: 'copy link only',
  COPY_TAG: 'copy img tag',
};
