import type { PropsWithChildren, RefObject } from 'react';

import { Box } from '@mui/material';

import type { SxProps } from '@mui/material';

const BackgroundCircle = () => (
  <Box
    width='35.9375rem'
    height='36.6875rem'
    bgcolor='p.8'
    borderRadius='50%'
    zIndex='2'
    sx={{
      filter: 'blur(25px)',
    }}
  ></Box>
);

interface BackgroundCircleProps {
  sx: SxProps;
  domRef?: RefObject<HTMLElement>;
}

export const BackgroundWithCircle = ({
  children,
  sx,
  domRef,
}: PropsWithChildren<BackgroundCircleProps>) => (
  <Box width={'100vw'} position={'relative'} bgcolor={'#f9f9f9'} sx={sx} ref={domRef}>
    {children}

    <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
      <BackgroundCircle />
    </Box>
    <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
      <BackgroundCircle />
    </Box>
  </Box>
);
