import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Container = styled.header`
  width: 100%;
  background-color: black;
`;

const Header = () => {
  return (
    <Container>
      <Typography variant='h3' color='common.black'>
        Stackticon
      </Typography>
    </Container>
  );
};

export default Header;
