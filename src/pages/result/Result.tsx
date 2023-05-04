import BackgroundWithCircle from '@common/BackgroundWithCircle';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonOptions from 'components/button-options';
import Header from 'components/header';
import { LandingLabel } from 'components/stackticon-images/StackticonImages';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ResultImage = styled.img`
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
    <BackgroundWithCircle sx={{ height: '100vh', overflow: 'hidden' }}>
      <Header isMain={false} />

      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        zIndex={5}
        textAlign={'center'}
        sx={{
          transform: 'translate(-50%, -70%)',
        }}
      >
        <LandingLabel
          styles={{
            marginTop: isMobile ? '3.75rem' : '8.125rem',
            scale: isMobile ? '0.7' : '1',
            marginBottom: '50px',
          }}
        />

        <ResultImage src={state} alt='stackticon result' />

        <Buttons
          style={{
            marginTop: '30px',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <ButtonOptions url={state} />

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
        </Buttons>
      </Box>
    </BackgroundWithCircle>
  );
};

export default Result;
