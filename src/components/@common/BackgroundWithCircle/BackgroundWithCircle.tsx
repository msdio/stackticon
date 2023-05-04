import type { SxProps } from '@mui/material';
import { Box } from '@mui/material';
import BackgroundCircle from 'components/background-circle';
import type { PropsWithChildren } from 'react';

export const BackgroundWithCircle = ({ children, sx }: PropsWithChildren<{ sx: SxProps }>) => (
  <Box width={'100vw'} position={'relative'} bgcolor={'#f9f9f9'} sx={sx}>
    {children}

    <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
      <BackgroundCircle />
    </Box>
    <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
      <BackgroundCircle />
    </Box>
  </Box>
);
