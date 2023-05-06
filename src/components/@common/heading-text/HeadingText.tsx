import { Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

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
