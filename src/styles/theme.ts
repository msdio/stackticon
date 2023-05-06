import { createTheme } from '@mui/material/styles';

import { colors } from './color';
import { components } from './components';
import { typos } from './typo';

export const theme = createTheme({
  typography: typos,
  palette: colors,
  components: components,
});

declare module '@mui/material/styles' {
  interface Palette {
    p: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
    };

    cg: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
    };
  }

  interface PaletteOptions {
    p: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
    };

    cg: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
    };
  }

  interface PaletteColor {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
  }

  interface SimplePaletteColorOptions {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
  }
}
