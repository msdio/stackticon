import { Link } from 'react-router-dom';

import { Box, Button, useMediaQuery } from '@mui/material';

import ButtonOptions from 'components/button-options';

import type { LocationState } from 'types/location';

interface BottomButtonProps {
  state: LocationState;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomButtons = ({ state, setOpenToast }: BottomButtonProps) => {
  const isMobile = useMediaQuery('(max-width: 740px)');

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'3.625rem'}
      mt={'30px'}
      flexDirection={isMobile ? 'column' : 'row'}
    >
      <ButtonOptions state={state} setOpenToast={setOpenToast} />

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
