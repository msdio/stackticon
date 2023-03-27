import { Box, Container, Typography } from '@mui/material';
import { fadeFromLeft, fadeFromRight } from 'constants/animations';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import type { RefObject } from 'react';

interface GuideProps {
  isMobile: boolean;
  observerRef: RefObject<HTMLDivElement>;
}

const GuideSample = ({ isMobile, observerRef }: GuideProps) => {
  const activeAnimation = useIntersectionObserver({ ref: observerRef, threshold: 0.5 });

  return (
    <Container
      sx={{
        width: '100%',
        height: '40vh',
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          width: isMobile ? '100%' : '550px',
          animation: activeAnimation ? `${fadeFromLeft} 1s` : '',
          display: activeAnimation ? '' : 'none',
        }}
      >
        <img
          width={isMobile ? '100%' : '550px'}
          src='https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1679045677747?alt=media&token=e942f72b-e054-46e0-beb0-7e6beba0542b'
          alt='create your own skill sets'
          loading='lazy'
        />
      </Box>
      <Box
        sx={{
          animation: activeAnimation ? `${fadeFromRight} 1s` : '',
          display: activeAnimation ? '' : 'none',
        }}
      >
        <Typography variant='h4'>Recognize in a glance</Typography>
      </Box>
    </Container>
  );
};

export default GuideSample;
