import { createTheme } from '@mui/material/styles';

import { colors } from './color';
import { typos } from './typo';

export const theme = createTheme({
  typography: typos,
  palette: colors,
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          backgroundColor: '#e6f0ff',
          border: '1px solid #99c2ff',
        },
        paper: {
          borderRadius: '12px',
          marginTop: '18px',
        },
        listbox: {
          '::-webkit-scrollbar': {
            width: '14px',
          },
          '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 14px 14px transparent',
            border: 'solid 4px transparent',
            margin: 3,
          },
          '::-webkit-scrollbar-thumb': {
            boxShadow: 'inset 0 0 14px 14px #D0D0D0',
            border: 'solid 4px transparent',
            borderRadius: '14px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: 'white',
          fontSize: '1.1875rem',

          '&.Mui-focused': {
            border: '1px #66a3ff solid',
          },
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        deleteIcon: {
          color: '#99c2ff',
        },
      },
    },
  },
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
