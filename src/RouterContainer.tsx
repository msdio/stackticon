import { Box } from '@mui/material';
import { Suspense } from 'react';
import Router from 'Router';
import GoogleAnalyticsTracker from 'services/google-analytics/GoogleAnalyticsTracker';

const loading = <div>Assembling UIs...</div>;

const RouterContainer = () => {
  GoogleAnalyticsTracker();

  return (
    <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
      <Suspense fallback={loading}>
        <Router />
      </Suspense>
    </Box>
  );
};

export default RouterContainer;
