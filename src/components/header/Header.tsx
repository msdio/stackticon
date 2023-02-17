import styled from '@emotion/styled';
import { Box, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { APP_NAME } from 'constants/constants';
import { Svg } from 'constants/Svg';
import { Link as RLink } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  /* background-color: #ddc6b6; */
  background-color: #02343f;
  /* background-color: #343148; */
  padding: 10px 30px;

  position: fixed;

  z-index: 100;

  border-radius: 0 0 10px 10px;
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
          {APP_NAME}
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
            <path d={Svg.coffee} fill='#FFF8EA' />
          </SvgIcon>
          <Typography color='primary.main'>buy coffee</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;
