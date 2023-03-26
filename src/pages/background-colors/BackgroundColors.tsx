import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import BackgroundCircle from 'components/BackgroundCircle';
import Header from 'components/header';
import StackContainer from 'components/stack-container';
import { useLocation } from 'react-router-dom';

const BackgroundColors = () => {
  const { state } = useLocation();
  const isMobile = useMediaQuery('(max-width: 740px)');

  return (
    <Box bgcolor='#f9f9f9' position='relative' width='100%' overflow='hidden'>
      <Header />
      <Box
        width='100vw'
        height='100%'
        minHeight='100vh'
        justifyContent='center'
        paddingTop='13.0625rem'
        position='relative'
        zIndex='5'
      >
        <Typography
          textAlign='center'
          p={5}
          fontWeight='800'
          fontSize={isMobile ? '2rem' : '4.375rem'}
          color='cg.1'
        >
          Choose Color
        </Typography>

        <Container
          sx={{
            width: '100%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5rem',
            marginTop: '2.8125rem',
          }}
        >
          <StackContainer colorSelected='black' state={state} isMobile={isMobile} />
          <StackContainer colorSelected='white' state={state} isMobile={isMobile} />
        </Container>
      </Box>

      <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
        <BackgroundCircle />
      </Box>
      <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
        <BackgroundCircle />
      </Box>
    </Box>
  );
};

export default BackgroundColors;
