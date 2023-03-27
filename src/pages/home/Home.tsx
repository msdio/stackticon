import { Box, useMediaQuery } from '@mui/material';
import Header from 'components/header';
import Landing from 'components/landing';
import { useRef } from 'react';

import * as Guide from '../../components/guides';

const Home = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <Box width='100vw' height='fit-content' minHeight='100vh' position='relative'>
      <Header />

      <Landing isMobile={isMobile} />

      <Box ref={observerRef} width='100%' height='100vh' zIndex='3' bgcolor='#f9f9f9'>
        <Guide.GuideUsage isMobile={isMobile} observerRef={observerRef} />
        <Guide.GuideSample isMobile={isMobile} observerRef={observerRef} />
      </Box>
    </Box>
  );
};

export default Home;
