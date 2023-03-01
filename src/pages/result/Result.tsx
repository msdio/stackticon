import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import ButtonOptions from 'components/button-options/ButtonOptions';
import { APP_NAME } from 'constants/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
`;

const Img = styled.img`
  width: 80vw;
  max-width: 700px;
  margin: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  window.addEventListener('popstate', () => {
    navigate('/');
  });

  return (
    <Container>
      <Typography marginBottom={'10%'} fontWeight={'bold'} color={'#02343f'} variant='h1'>
        {APP_NAME}
      </Typography>
      <div>
        <Img src={state} alt='stackticon result' />
      </div>
      <Buttons>
        <ButtonOptions url={state} />
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button style={{ marginLeft: '10px' }} variant='contained' color='info' endIcon='🏠'>
            Return to main
          </Button>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Result;
