import { Box } from '@mui/material';

interface LogoProps {
  width: number;
  height: number;
}

const LogoWithBackground = ({ width, height }: LogoProps) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderRadius='4px'
      bgcolor='#f3eae1'
      width={`${width}px`}
      height={`${height}px`}
      gap='9.6px'
    >
      <img
        src={require('../images/logo.png')}
        alt='logo'
        width={`${width - 2}px)`}
        height={`calc(${height - 2}px)`}
      />
    </Box>
  );
};

export default LogoWithBackground;
