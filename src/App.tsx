import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
          <Router />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
