import * as icons from 'simple-icons';

export const getSimpleIconInfo = (target: string) => {
  const iconKey = ('si' + target) as keyof typeof icons;

  return icons[iconKey];
};
