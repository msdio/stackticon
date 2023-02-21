import { ThemeProvider } from '@mui/system';
import { HashRouter } from 'react-router-dom';
import RouterContainer from 'RouterContainer';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <RouterContainer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
