import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import Header from 'components/header';
import Input from 'components/input';
import { Svg } from 'constants/Svg';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const fadeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const CustomContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  position: relative;
`;

const MotionDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const JavascriptIcon = () => (
  <SvgIcon viewBox='0 0 24 24'>
    <path d={Svg.javascript} />
  </SvgIcon>
);

const ReactIcon = () => (
  <SvgIcon viewBox='0 0 24 24'>
    <path d={Svg.react} />
  </SvgIcon>
);

const NodeJSIcon = () => (
  <SvgIcon viewBox='0 0 24 24'>
    <path d={Svg.nodejs} />
  </SvgIcon>
);

const SpringIcon = () => (
  <SvgIcon viewBox='0 0 24 24'>
    <path d={Svg.spring} />
  </SvgIcon>
);

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop < 10) {
      setScroll(false);
    }
    if (scrollTop >= 300) {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeSkillSet = (inputSkills: string[]) => {
    setSkills(inputSkills);
  };

  const submitSkills = () => {
    navigate('/loading', { state: skills });
  };

  return (
    <CustomContainer>
      <Header />

      <Container
        ref={containerRef}
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          overflow: 'hidden',
        }}
      >
        <Input handler={changeSkillSet} />
        <Button variant='contained' color='success' size='large' onClick={submitSkills}>
          Create Set
        </Button>

        <MotionDiv drag dragElastic={2} dragConstraints={containerRef}>
          <ReactIcon />
        </MotionDiv>
        <MotionDiv drag dragElastic={2} dragConstraints={containerRef}>
          <NodeJSIcon />
        </MotionDiv>
        <MotionDiv drag dragElastic={2} dragConstraints={containerRef}>
          <JavascriptIcon />
        </MotionDiv>
        <MotionDiv drag dragElastic={2} dragConstraints={containerRef}>
          <SpringIcon />
        </MotionDiv>
      </Container>

      <Container
        sx={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            animation: scroll ? `${fadeFromLeft} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        >
          <Typography variant='h4'>Simple, Fast</Typography>
          <Typography marginLeft={5} marginTop={1}>
            just input your skills and get it
          </Typography>
        </Box>
        <Box
          sx={{
            width: '450px',
            height: '300px',
            background: 'grey',
            animation: scroll ? `${fadeFromRight} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        />
      </Container>
      <Container
        sx={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            width: '500px',
            height: '350px',
            background: 'grey',
            animation: scroll ? `${fadeFromLeft} 1s` : '',
            display: scroll ? '' : 'none',
          }}
        />
        <Box>
          <Typography
            variant='h4'
            sx={{
              animation: scroll ? `${fadeFromRight} 1s` : '',
              display: scroll ? '' : 'none',
            }}
          >
            Recognize in a glance
          </Typography>
        </Box>
      </Container>
    </CustomContainer>
  );
};

export default Home;
