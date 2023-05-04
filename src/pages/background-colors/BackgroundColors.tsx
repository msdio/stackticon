import { Box, Stack, useMediaQuery } from '@mui/material';
import BackgroundWithCircle from 'components/@common/BackgroundWithCircle';
import HeadingText from 'components/@common/HeadingText';
import Header from 'components/header';
import StackContainer from 'components/stack-container';
import { useLocation } from 'react-router-dom';

const BackgroundColors = () => {
  const { state } = useLocation();
  const isMobile = useMediaQuery('(max-width: 740px)');

  return (
    <BackgroundWithCircle sx={{ overflow: 'hidden' }}>
      <Header isMain={false} />
      <Box
        width='100vw'
        height='100%'
        minHeight='100vh'
        justifyContent='center'
        paddingTop='8.125rem'
        position='relative'
        zIndex='5'
      >
        <HeadingText isMobile={isMobile}>Choose Color</HeadingText>

        <Stack alignItems={'center'} spacing={9} mt={'2.8125rem'}>
          <StackContainer colorSelected='black' state={state} isMobile={isMobile} />
          <StackContainer colorSelected='white' state={state} isMobile={isMobile} />
        </Stack>
      </Box>
    </BackgroundWithCircle>
  );
};

export default BackgroundColors;
