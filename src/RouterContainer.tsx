import { Suspense } from 'react';

import { Box } from '@mui/material';

import LogoLoading from 'components/loading/LogoLoading';
import GoogleAnalyticsTracker from 'services/google-analytics/GoogleAnalyticsTracker';

import Router from './Router';

const RouterContainer = () => {
  GoogleAnalyticsTracker();

  return (
    <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
      <Suspense fallback={<LogoLoading loadingText='Assembling UIs...' />}>
        <Router />
      </Suspense>
    </Box>
  );
};

export default RouterContainer;
