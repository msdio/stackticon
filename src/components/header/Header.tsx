import styled from '@emotion/styled';
import { Box, Link, Stack, SvgIcon, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoWithBackground from 'assets/icons/logoWithBackground';
import ReadRepository from 'components/read-repository';
import { wiggling } from 'constants/animations';
import { APP_NAME, GITHUB_LINK } from 'constants/constants';
import { BetaBadge } from 'constants/icons';
import { Svg } from 'constants/svgs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link as RLink } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 86px;
  background-color: #ffffff;
  padding: 0px 4.2vw;

  position: fixed;

  z-index: 100;
`;

const RouterLink = styled(RLink)`
  text-decoration: none;

  display: flex;
  align-items: center;

  gap: 0.5625rem;
`;

const GithubLink = styled(Link)`
  width: 201px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(0deg, rgba(0, 102, 255, 0.2), rgba(0, 102, 255, 0.2)), #ffffff;

  border-radius: 12px;

  text-decoration: none;
`;

const ReadRepositoryButton = styled(motion.div)`
  width: 201px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  cursor: pointer;
`;

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 740px)');
  const [openRepositoryReader, setOpenRepositoryReader] = useState(false);

  return (
    <Container>
      <RouterLink to='/'>
        <LogoWithBackground width={29.3} height={29.3} />
        <Typography
          variant='h4'
          color='#323443'
          fontWeight='bold'
          fontSize='1.75rem'
          sx={{
            cursor: 'pointer',
          }}
        >
          {APP_NAME}
        </Typography>
      </RouterLink>

      <Stack direction='row' spacing={3} marginLeft='auto'>
        {openRepositoryReader && <ReadRepository />}
        <ReadRepositoryButton
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpenRepositoryReader((prev) => !prev)}
        >
          <Typography
            fontSize={'1.1rem'}
            sx={{
              userSelect: 'none',
            }}
          >
            Get stacks from repo
          </Typography>
          <Box
            mb={'10px'}
            ml={'7px'}
            sx={{
              scale: '1.5',
              animation: `${wiggling} 2s infinite`,
            }}
          >
            <BetaBadge />
          </Box>
        </ReadRepositoryButton>

        <GithubLink
          href={GITHUB_LINK}
          target='_blank'
          rel='noreferrer'
          sx={{
            scale: isMobile ? '0.7' : '1',
          }}
        >
          <Box
            component='div'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <SvgIcon viewBox='0 0 24 24'>
              <path d={Svg.github} fill='#0066ff' />
            </SvgIcon>
            <Typography color='#0066ff' fontWeight='600' fontSize='1.375rem'>
              Visit Github
            </Typography>
          </Box>
        </GithubLink>

        {/* <Box
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
        </Box> */}
      </Stack>
    </Container>
  );
};

export default Header;
