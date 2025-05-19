import { Suspense } from 'react';
import { HashRouter } from 'react-router';

import { Box } from '@mui/material';

import LogoLoading from 'components/loading/LogoLoading';

import Router from './Router';

const RouterContainer = () => {
  return (
    <HashRouter>
      <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
        <Suspense fallback={<LogoLoading loadingText='Assembling UIs...' />}>
          <Router />
        </Suspense>
      </Box>
    </HashRouter>
  );
};

export default RouterContainer;
