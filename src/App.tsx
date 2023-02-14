import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Input from 'components/input';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1' color='primary.main'>
        adfadfadf
      </Typography>
      <Input></Input>
    </ThemeProvider>
  );
}

export default App;
