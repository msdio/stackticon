import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
import Header from 'components/header';
import Input from 'components/input';

const CustomContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  position: relative;
`;

const Home = () => {
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
        <Box>
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
          }}
        />
        <Box>
          <Typography variant='h4'>Recognize in a glance</Typography>
        </Box>
      </Container>
    </CustomContainer>
  );
};

export default Home;
