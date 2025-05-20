import { Box, Stack, styled, Typography } from '@mui/material';

import { RandomRotate } from 'constants/animations';

import Loading1 from '../../assets/images/loading/loading-1.png';
import Loading2 from '../../assets/images/loading/loading-2.png';
import Loading3 from '../../assets/images/loading/loading-3.png';

const Hider = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',

  zIndex: 5,

  backgroundColor: `${theme.palette.info.dark}`,
  opacity: 0.9,
}));

const LogoLoading = ({ loadingText }: { loadingText: string }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100vw'}
      height={'100vh'}
      position={'absolute'}
      left={0}
      right={0}
      top={0}
      bottom={0}
    >
      <Hider />

      <Box zIndex={10} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={5}>
        <Typography fontSize={32} fontWeight={600} color={'white'}>
          {loadingText}
        </Typography>

        <Stack direction={'row'} spacing={10}>
          <Box
            sx={{
              animation: `${RandomRotate} 1s`,
            }}
          >
            <img width={'150px'} height={'150px'} src={Loading1} alt={'loading 1'} />
          </Box>
          <Box
            sx={{
              animation: `${RandomRotate} 1s`,
              animationDelay: '1s',
            }}
          >
            <img width={'130px'} height={'130px'} src={Loading2} alt={'loading 2'} />
          </Box>
          <Box
            sx={{
              animation: `${RandomRotate} 1s`,
              animationDelay: '2s',
            }}
          >
            <img width={'130px'} height={'130px'} src={Loading3} alt={'loading 3'} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default LogoLoading;
