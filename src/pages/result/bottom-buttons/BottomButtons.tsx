import { Box, Button } from '@mui/material';
import ButtonOptions from 'components/button-options';
import { Link } from 'react-router-dom';
import type { LocationState } from 'types/location';

export const BottomButtons = ({ isMobile, state }: { isMobile: boolean; state: LocationState }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'3.625rem'}
      mt={'30px'}
      flexDirection={isMobile ? 'column' : 'row'}
    >
      <ButtonOptions state={state} />

      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          size='large'
          variant='contained'
          endIcon='🏠'
          sx={{
            backgroundColor: 'info.dark',
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'cg.1',
            },
          }}
        >
          Return to main
        </Button>
      </Link>
    </Box>
  );
};
