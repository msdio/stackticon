import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RouterContainer from 'RouterContainer';
import { theme } from 'styles/theme';

const router = createHashRouter([
  {
    path: '/*',
    element: <RouterContainer />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
