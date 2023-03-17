import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Pretendard Variable',
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'sans-serif',
    ].join(','),
  },
  palette: {
    p: {
      '1': '#0066ff',
      '2': '#3385ff',
      '3': '#66a3ff',
      '4': '#99c2ff',
      '5': '#cce0ff',
      '6': '#e6f0ff',
      '7': '#f0f6ff',
      '8': '#f5f9ff',
    },

    cg: {
      '1': '#0A1320',
      '2': '#1A2339',
      '3': '#364261',
      '4': '#4B597D',
      '5': '#7886AA',
      '6': '#B3BACD',
    },

    info: {
      light: '#F9F9F9',
      main: '#8A8A8A',
      dark: '#444A52',
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
