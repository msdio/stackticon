import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import BackgroundCircle from 'components/BackgroundCircle';
import ButtonOptions from 'components/button-options/ButtonOptions';
import Header from 'components/header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
  z-index: 5;
`;

const Img = styled.img`
  width: 80vw;
  max-width: 700px;
  margin: 30px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.625rem;
`;

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 740px)');

  window.addEventListener('popstate', () => {
    navigate('/');
  });

  return (
    <Box width='100vw' height='100vh' bgcolor='#f9f9f9' position='relative'>
      <Header />
      <Container>
        <img
          src={require('../../assets/images/landing-label.png')}
          alt='landing-label'
          width='312px'
          height='52px'
          style={{
            marginTop: isMobile ? '150px' : '250px',
            transform: 'translateX(-5px)',
            scale: isMobile ? '0.7' : '1',
          }}
        />
        <Box marginTop='50px' marginBottom='30px'>
          <Img src={state} alt='stackticon result' />
        </Box>
        <Buttons
          style={{
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <ButtonOptions url={state} />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button
              variant='contained'
              endIcon='🏠'
              sx={{
                width: '236px',
                height: '56px',
                backgroundColor: '#454A52',
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
        </Buttons>
      </Container>

      <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
        <BackgroundCircle />
      </Box>
      <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
        <BackgroundCircle />
      </Box>
    </Box>
  );
};

export default Result;
