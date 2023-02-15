import styled from '@emotion/styled';
import { Box, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { Svg } from 'constants/Svg';
import { Link as RLink } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  background-color: #ddc6b6;
  padding: 10px 30px;
`;

const RouterLink = styled(RLink)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <Container>
      <RouterLink to='/'>
        <Typography
          variant='h4'
          color='primary.main'
          sx={{
            cursor: 'pointer',
          }}
        >
          Stackticon
        </Typography>
      </RouterLink>

      <Stack direction='row' spacing={2} marginLeft='auto'>
        <Link
          href='https://github.com/msdio/stackticon'
          sx={{
            textDecoration: 'none',
          }}
        >
          <Box
            component='div'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon viewBox='0 0 24 24'>
              <path d={Svg.github} />
            </SvgIcon>
            <Typography color='primary.main'>source code</Typography>
          </Box>
        </Link>

        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgIcon viewBox='0 0 512 512'>
            <path d={Svg.coffee} />
          </SvgIcon>
          <Typography color='primary.main'>buy coffee</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;
