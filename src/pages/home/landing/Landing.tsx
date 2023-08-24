import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import BackgroundWithCircle from '@common/background-with-circle';
import DraggableIcon from 'components/draggable-icon';
import Input from 'components/input';
import { JavascriptIcon, NodeJSIcon, ReactIcon, SpringIcon } from 'constants/icons';
import { useStacks } from 'providers/StacksProvider';

import * as Images from '../../../components/stackticon-images/StackticonImages';

const Landing = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { stacks } = useStacks();
  const isMobile = useMediaQuery('(max-width: 900px)');

  const submitStacks = () => {
    if (!buttonClicked && stacks.length > 0) {
      navigate('/backgrounds');
      setButtonClicked(true);
    }
  };

  return (
    <BackgroundWithCircle
      domRef={containerRef}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '150px',
        gap: isMobile ? '10px' : '61px',
      }}
    >
      <Box
        ref={containerRef}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        zIndex='3'
        sx={{
          scale: isMobile ? '0.7' : '1',
        }}
      >
        <Images.LandingImage />
        <Images.LandingLabel styles={{ marginTop: '57px' }} />

        <Typography fontSize='24px' fontWeight='400' color='cg.4' marginTop='24px'>
          make skill sets for your project
        </Typography>
      </Box>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='20px'
        zIndex='5'
        sx={{
          scale: isMobile ? '0.7' : '1',
        }}
      >
        <Input />
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={submitStacks}
          sx={{
            zIndex: 50,
            backgroundColor: stacks.length > 0 ? 'p.1' : 'info.main',
            width: '175px',
            height: '60px',
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Create {isMobile ? '' : 'Set'}
        </Button>
      </Box>

      <DraggableIcon constraints={containerRef} icon={<ReactIcon />} bottom='10%' right='5%' />
      <DraggableIcon constraints={containerRef} icon={<NodeJSIcon />} top='20%' right='20%' />
      <DraggableIcon constraints={containerRef} icon={<JavascriptIcon />} top='30%' left='13%' />
      <DraggableIcon constraints={containerRef} icon={<SpringIcon />} bottom='17%' left='25%' />
    </BackgroundWithCircle>
  );
};

export default Landing;
