import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
import Header from 'components/header';
import Input from 'components/input';
import { useEffect, useState } from 'react';

const CustomContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  position: relative;
`;

const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const fadeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Home = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop < 10) {
      setScroll(false);
    }
    if (scrollTop >= 300) {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CustomContainer>
      <Header />

      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Input />
        <Button variant='contained' color='success' size='large'>
          Create Set
        </Button>
      </Container>

      <Container
        sx={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            animation: scroll ? `${fadeFromLeft} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        >
          <Typography variant='h4'>Simple, Fast</Typography>
          <Typography marginLeft={5} marginTop={1}>
            just input your skills and get it
          </Typography>
        </Box>
        <Box
          sx={{
            width: '450px',
            height: '300px',
            background: 'grey',
            animation: scroll ? `${fadeFromRight} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        />
      </Container>
      <Container
        sx={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            width: '500px',
            height: '350px',
            background: 'grey',
            animation: scroll ? `${fadeFromLeft} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        />
        <Box>
          <Typography
            variant='h4'
            sx={{
              animation: scroll ? `${fadeFromRight} 1s` : '',
              display: scroll ? '' : 'none',
            }}
          >
            Recognize in a glance
          </Typography>
        </Box>
      </Container>
    </CustomContainer>
  );
};

export default Home;
