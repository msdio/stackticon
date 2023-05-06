const MuiAutocomplete = {
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
};

const MuiOutlinedInput = {
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
};

const MuiChip = {
  styleOverrides: {
    deleteIcon: {
      color: '#99c2ff',
    },
  },
};

export const components = {
  MuiAutocomplete,
  MuiOutlinedInput,
  MuiChip,
};
