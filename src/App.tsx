import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import StacksProvider from 'providers/StacksProvider';
import RouterContainer from 'RouterContainer';
import { theme } from 'styles/theme';

function App() {
  return (
    <StacksProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterContainer />
      </ThemeProvider>
    </StacksProvider>
  );
}

export default App;
