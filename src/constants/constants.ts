import type { MakeUnionType } from 'types/common';

export const APP_NAME = 'stackticon';

export const GITHUB_LINK = 'https://github.com/msdio/stackticon';

export const DEPENDENCY = 'dependencies';
export const DEV_DEPENDENCY = 'devDependencies';

export const COPY_OPTIONS = {
  COPY_README: 'copy for readme',
  COPY_LINK: 'copy link only',
  COPY_TAG: 'copy img tag',
} as const;
export type CopyOptionType = MakeUnionType<typeof COPY_OPTIONS>;
