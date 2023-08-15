import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import BackgroundWithCircle from '@common/background-with-circle';
import Header from 'components/header';
import { LandingLabel } from 'components/stackticon-images/StackticonImages';
import Toast from 'components/toast';

import BottomButtons from './bottom-buttons';

const ResultImage = styled.img`
  width: 80vw;
  max-width: 700px;
  margin: 30px;
`;

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 740px)');
  const [openToast, setOpenToast] = useState(false);

  const closeToast = () => {
    setOpenToast(false);
  };

  window.addEventListener('popstate', () => {
    navigate('/');
  });

  return (
    <BackgroundWithCircle sx={{ height: '100vh', overflow: 'hidden' }}>
      <Header isMain={false} />

      <Toast type='success' message='copied option!' open={openToast} close={closeToast} />

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

        <ResultImage src={state.url} alt='stackticon result' />

        <BottomButtons isMobile={isMobile} state={state} setOpenToast={setOpenToast} />
      </Box>
    </BackgroundWithCircle>
  );
};

export default Result;
