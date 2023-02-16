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
    primary: {
      light: '#FFFBF2',
      main: '#FFF8EA',
      dark: '#DBC9AB',
    },
    success: {
      light: '#58CE5C',
      main: '#58CE5C',
      dark: '#2C9442',
    },
    info: {
      light: '#70C2FD',
      main: '#1383F9',
      dark: '#094BB3',
    },
    warning: {
      light: '#F1F783',
      main: '#D9E532',
      dark: '#99A419',
    },
    common: {
      black: '#191919',
      white: '#F5F5F5',
    },

    background: {
      default: '#FFF8EA',
    },
  },
});
