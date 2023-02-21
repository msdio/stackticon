import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import GoogleAnalyticsTracker from 'GoogleAnalyticsTracker';
import { HashRouter } from 'react-router-dom';
import Router from 'Router';
import { theme } from 'styles/theme';

function App() {
  GoogleAnalyticsTracker();

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
          <Router />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
