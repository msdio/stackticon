import { useRef } from 'react';

import { Box } from '@mui/material';

import Header from 'components/header';
import Landing from 'pages/home/landing';

import * as Guide from './guides';

const Home = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  return (
    <Box width='100vw' height='fit-content' minHeight='100vh' position='relative'>
      <Header isMain={true} />

      <Landing />

      <Box ref={observerRef} width='100%' height='100vh' zIndex='3' bgcolor='#f9f9f9'>
        <Guide.GuideUsage observerRef={observerRef} />
        <Guide.GuideSample observerRef={observerRef} />
      </Box>
    </Box>
  );
};

export default Home;
