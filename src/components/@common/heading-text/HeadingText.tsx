import type { PropsWithChildren } from 'react';

import { Typography } from '@mui/material';

export const HeadingText = ({ children, isMobile }: PropsWithChildren<{ isMobile: boolean }>) => (
  <Typography
    textAlign='center'
    p={5}
    fontWeight='800'
    fontSize={isMobile ? '2rem' : '4.375rem'}
    color='cg.1'
  >
    {children}
  </Typography>
);
