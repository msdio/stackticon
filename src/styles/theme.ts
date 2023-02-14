import { createTheme } from '@mui/system';

export const theme = createTheme({
  palette: {
    primary: {
      lighter: '#FFFEFA',
      light: '#FFFBF2',
      main: '#FFF8EA',
      dark: '#DBC9AB',
      darker: '#B79D75',
    },
    success: {
      lighter: '#58CE5C',
      light: '#58CE5C',
      main: '#58CE5C',
      dark: '#2C9442',
      darker: '#106230',
    },
    info: {
      lighter: '#CFEFFE',
      light: '#70C2FD',
      main: '#1383F9',
      dark: '#094BB3',
      darker: '#063590',
    },
    warning: {
      lighter: '#FCFDD6',
      light: '#F1F783',
      main: '#D9E532',
      dark: '#99A419',
      darker: '#646D09',
    },
    danger: {
      lighter: '#FFE9E6',
      light: '#FFB5BA',
      main: '#FF84A5',
      dark: '#B74278',
      darker: '#7A1959',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    primary: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    success: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    info: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    warning: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    danger: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primary?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    success?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    info?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    warning?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    danger?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
  }
}
