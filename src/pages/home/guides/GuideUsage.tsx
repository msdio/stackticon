import type { RefObject } from 'react';

import { Box, Container, Typography, useMediaQuery } from '@mui/material';

import { fadeFromLeft, fadeFromRight } from 'constants/animations';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

interface GuideProps {
  observerRef: RefObject<HTMLDivElement | null>;
}

const GuideUsage = ({ observerRef }: GuideProps) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const activeAnimation = useIntersectionObserver({ ref: observerRef, threshold: 0.5 });

  return (
    <Container
      sx={{
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Box
        zIndex='3'
        sx={{
          animation: activeAnimation ? `${fadeFromLeft} 1s` : '',
          display: activeAnimation ? '' : 'none',
        }}
      >
        <Typography variant='h4'>Simple, Fast</Typography>
        <Typography marginLeft={5} marginTop={1}>
          just input your skills and get it
        </Typography>
      </Box>
      <Box
        sx={{
          width: isMobile ? '100%' : '550px',
          animation: activeAnimation ? `${fadeFromRight} 1s` : '',
          display: activeAnimation ? '' : 'none',
          zIndex: '3',
        }}
      >
        <img
          width={isMobile ? '100%' : '550px'}
          src='https://user-images.githubusercontent.com/59170680/225875213-1ec4667d-43a7-49b8-812e-36d3451bc535.gif'
          alt='choose stacks gif'
          loading='lazy'
        />
      </Box>
    </Container>
  );
};

export default GuideUsage;
