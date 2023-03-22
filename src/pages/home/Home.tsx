import styled from '@emotion/styled';
import { Box, Button, Container, SvgIcon, Typography, useMediaQuery } from '@mui/material';
import BackgroundCircle from 'components/BackgroundCircle';
import DraggableIcon from 'components/draggable-icon';
import Header from 'components/header';
import Input from 'components/input';
import { Svg } from 'constants/Svg';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fadeFromLeft, fadeFromRight } from '../../constants/animations';

const CustomContainer = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;

  position: relative;
`;

const JavascriptIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.javascript.path} fill={Svg.javascript.hex} />
  </SvgIcon>
);

const ReactIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.react.path} fill={Svg.react.hex} />
  </SvgIcon>
);

const NodeJSIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.nodejs.path} fill={Svg.nodejs.hex} />
  </SvgIcon>
);

const SpringIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.spring.path} fill={Svg.spring.hex} />
  </SvgIcon>
);

const Home = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width: 900px)');

  const activeAnimation = useIntersectionObserver({ ref: observerRef, threshold: 0.5 });

  const changeSkillSet = (inputSkills: string[]) => {
    setSkills(inputSkills);
  };

  const submitSkills = () => {
    if (!buttonClicked && skills.length > 0) {
      navigate('/backgrounds', { state: skills });
      setButtonClicked(true);
    }
  };

  return (
    <CustomContainer>
      <Header />

      <div
        ref={containerRef}
        style={{
          width: '100vw !important',
          height: '95vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          paddingTop: '150px',
          gap: isMobile ? '10px' : '61px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          zIndex='3'
          sx={{
            scale: isMobile ? '0.7' : '1',
          }}
        >
          <img
            src={require('../../assets/images/landing-image.png')}
            alt='landing-image'
            width='406px'
            height='144px'
          />
          <img
            src={require('../../assets/images/landing-label.png')}
            alt='landing-label'
            width='312px'
            height='52px'
            style={{
              marginTop: '57px',
              transform: 'translateX(-5px)',
            }}
          />
          <Typography fontSize='24px' fontWeight='400' color='cg.4' marginTop='24px'>
            make skill sets for your project
          </Typography>
        </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            width: '100%',
            scale: isMobile ? '0.7' : '1',
          }}
        >
          <Input handler={changeSkillSet} />
          <Button
            variant='contained'
            color='success'
            size='large'
            onClick={submitSkills}
            sx={{
              zIndex: 50,
              backgroundColor: skills.length > 0 ? 'p.1' : 'info.main',
              width: '175px',
              height: '60px',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Create {isMobile ? '' : 'Set'}
          </Button>
        </div>

        <DraggableIcon constraints={containerRef} icon={<ReactIcon />} bottom='10%' right='5%' />
        <DraggableIcon constraints={containerRef} icon={<NodeJSIcon />} top='20%' right='20%' />
        <DraggableIcon constraints={containerRef} icon={<JavascriptIcon />} top='30%' left='13%' />
        <DraggableIcon constraints={containerRef} icon={<SpringIcon />} bottom='17%' left='25%' />

        <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
          <BackgroundCircle />
        </Box>
        <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
          <BackgroundCircle />
        </Box>
      </div>

      <div
        ref={observerRef}
        style={{
          width: '100%',
          height: '100vh',
          zIndex: '3',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Container
          sx={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              animation: activeAnimation ? `${fadeFromLeft} 1s` : '',
              display: activeAnimation ? '' : 'none',
              zIndex: '3',
            }}
          >
            <Typography variant='h4'>Simple, Fast</Typography>
            <Typography marginLeft={5} marginTop={1}>
              just input your skills and get it
            </Typography>
          </Box>
          <Box
            sx={{
              width: isMobile ? '100%' : '550px',
              animation: activeAnimation ? `${fadeFromRight} 1s` : '',
              display: activeAnimation ? '' : 'none',
              zIndex: '3',
            }}
          >
            <img
              width={isMobile ? '100%' : '550px'}
              src='https://user-images.githubusercontent.com/59170680/225875213-1ec4667d-43a7-49b8-812e-36d3451bc535.gif'
              alt='choose stacks gif'
              loading='lazy'
            />
          </Box>
        </Container>
        <Container
          sx={{
            width: '100%',
            height: '40vh',
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: isMobile ? '100%' : '550px',
              animation: activeAnimation ? `${fadeFromLeft} 1s` : '',
              display: activeAnimation ? '' : 'none',
            }}
          >
            <img
              width={isMobile ? '100%' : '550px'}
              src='https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1679045677747?alt=media&token=e942f72b-e054-46e0-beb0-7e6beba0542b'
              alt='create your own skill sets'
              loading='lazy'
            />
          </Box>
          <Box
            sx={{
              animation: activeAnimation ? `${fadeFromRight} 1s` : '',
              display: activeAnimation ? '' : 'none',
            }}
          >
            <Typography variant='h4'>Recognize in a glance</Typography>
          </Box>
        </Container>
      </div>
    </CustomContainer>
  );
};

export default Home;
