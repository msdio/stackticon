import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  const clickCopyUrl = async () => {
    await navigator.clipboard.writeText(state);
    alert('url을 복사했습니다');
  };
  return (
    <Container>
      <div>
        <Img src={state} alt='' />
      </div>
      <Buttons>
        <Button
          style={{ marginRight: '10px' }}
          onClick={clickCopyUrl}
          variant='contained'
          color='success'
          startIcon='🍄'
        >
          url 복사하기
        </Button>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button style={{ marginLeft: '10px' }} variant='contained' color='info' endIcon='🏠'>
            메인으로
          </Button>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Result;
