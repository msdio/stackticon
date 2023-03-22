import { Box } from '@mui/material';

const BackgroundCircle = () => (
  <Box
    width='35.9375rem'
    height='36.6875rem'
    bgcolor='p.8'
    borderRadius='50%'
    zIndex='2'
    sx={{
      filter: 'blur(25px)',
    }}
  ></Box>
);

export default BackgroundCircle;
