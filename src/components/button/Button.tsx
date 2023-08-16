import type { ReactElement } from 'react';

import { Box, Button as MUIButton } from '@mui/material';

interface ButtonProps {
  color: 'primary' | 'secondary' | 'info';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  icon?: ReactElement;
  iconPos?: 'start' | 'end';
  label?: string;
}

const Button = ({ color, size, onClick, icon, iconPos, label }: ButtonProps) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      flexDirection={iconPos === 'end' ? 'row-reverse' : 'row'}
    >
      {icon}
      <MUIButton color={color} size={size} onClick={onClick}>
        {label}
      </MUIButton>
    </Box>
  );
};

export default Button;
