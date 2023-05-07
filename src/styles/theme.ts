import { createTheme } from '@mui/material/styles';

import { components } from './components';
import { colors } from './paletteColors';
import { typos } from './typo';

export const theme = createTheme({
  typography: typos,
  palette: colors,
  components: components,
});
