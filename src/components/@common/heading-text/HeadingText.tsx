import type { PropsWithChildren } from 'react';

import { Typography, useMediaQuery } from '@mui/material';

export const HeadingText = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
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
};
