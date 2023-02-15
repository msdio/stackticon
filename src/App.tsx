import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Home from 'pages/home';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1' color='primary.main'>
        Stackticon
      </Typography>

      <img height='32' width='32' src='https://cdn.simpleicons.org/react' />
      <img height='32' width='32' src='https://cdn.simpleicons.org/javascript' />
      <img height='32' width='32' src='https://cdn.simpleicons.org/spring' />

      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
