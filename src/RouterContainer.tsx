import { Box } from '@mui/material';
import Router from 'Router';
import GoogleAnalyticsTracker from 'services/google-analytics/GoogleAnalyticsTracker';

const RouterContainer = () => {
  GoogleAnalyticsTracker();

  return (
    <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
      <Router />
    </Box>
  );
};

export default RouterContainer;
