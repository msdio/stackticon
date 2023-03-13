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
      'p/1': '#ff00aa',
      'p/2': 'linear-gradient(0deg, rgba(0, 102, 255, 0.8), rgba(0, 102, 255, 0.8)), #FFFFFF',
      'p/3': 'linear-gradient(0deg, rgba(0, 102, 255, 0.6), rgba(0, 102, 255, 0.6)), #FFFFFF',
      'p/4': 'linear-gradient(0deg, rgba(0, 102, 255, 0.4), rgba(0, 102, 255, 0.4)), #FFFFFF',
      'p/5': 'linear-gradient(0deg, rgba(0, 102, 255, 0.2), rgba(0, 102, 255, 0.2)), #FFFFFF',
      'p/6': 'linear-gradient(0deg, rgba(0, 102, 255, 0.1), rgba(0, 102, 255, 0.1)), #FFFFFF',
      'p/7': 'linear-gradient(0deg, rgba(0, 102, 255, 0.06), rgba(0, 102, 255, 0.06)), #FFFFFF',
      'p/8': 'linear-gradient(0deg, rgba(0, 102, 255, 0.04), rgba(0, 102, 255, 0.04)), #FFFFFF',
    },

    cg: {
      'cg/1': '#0A1320',
      'cg/2': '#1A2339',
      'cg/3': '#364261',
      'cg/4': '#4B597D',
      'cg/5': '#7886AA',
      'cg/6': '#B3BACD',
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
      'p/1': string;
      'p/2': string;
      'p/3': string;
      'p/4': string;
      'p/5': string;
      'p/6': string;
      'p/7': string;
      'p/8': string;
    };

    cg: {
      'cg/1': string;
      'cg/2': string;
      'cg/3': string;
      'cg/4': string;
      'cg/5': string;
      'cg/6': string;
    };
  }

  interface PaletteOptions {
    p: {
      'p/1': string;
      'p/2': string;
      'p/3': string;
      'p/4': string;
      'p/5': string;
      'p/6': string;
      'p/7': string;
      'p/8': string;
    };

    cg: {
      'cg/1': string;
      'cg/2': string;
      'cg/3': string;
      'cg/4': string;
      'cg/5': string;
      'cg/6': string;
    };
  }

  interface PaletteColor {
    'p/1'?: string;
    'p/2'?: string;
    'p/3'?: string;
    'p/4'?: string;
    'p/5'?: string;
    'p/6'?: string;
    'p/7'?: string;
    'p/8'?: string;

    'cg/1'?: string;
    'cg/2'?: string;
    'cg/3'?: string;
    'cg/4'?: string;
    'cg/5'?: string;
    'cg/6'?: string;
  }

  interface SimplePaletteColorOptions {
    'p/1'?: string;
    'p/2'?: string;
    'p/3'?: string;
    'p/4'?: string;
    'p/5'?: string;
    'p/6'?: string;
    'p/7'?: string;
    'p/8'?: string;

    'cg/1'?: string;
    'cg/2'?: string;
    'cg/3'?: string;
    'cg/4'?: string;
    'cg/5'?: string;
    'cg/6'?: string;
  }
}
