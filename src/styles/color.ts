type ColorCategoryType = 'p' | 'cg' | 'info';

type BasicColorNumberType = '1' | '2' | '3' | '4' | '5' | '6';
type AdditionalColorNumberType = '7' | '8';
type ColorInfoType = 'light' | 'main' | 'dark';

type BasicColorOptions = Record<BasicColorNumberType, string>;
type AdditionalColorOptions = Record<AdditionalColorNumberType, string>;
type ColorInfoOptions = Record<ColorInfoType, string>;

type ColorNumberOptions = BasicColorOptions | AdditionalColorOptions;

export const colors: Record<ColorCategoryType, ColorNumberOptions | ColorInfoOptions> = {
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
};
