import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Home from 'pages/home';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.default' width='100vw' height='fit-content' minHeight='100vh'>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
