import styled from '@emotion/styled';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import Header from 'components/header';
import Input from 'components/input';
import { Svg } from 'constants/Svg';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fadeFromLeft, fadeFromRight } from '../../constants/animations';

const CustomContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  position: relative;
`;

const MotionDiv = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0), 0 10px 20px rgba(0, 0, 0, 0);
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  position: absolute;
  bottom: 0%;
  right: 10%;
`;

const JavascriptIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.javascript} fill='#F7DF1E' />
  </SvgIcon>
);

const ReactIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.react} fill='#61DAFB' />
  </SvgIcon>
);

const NodeJSIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.nodejs} fill='#339933' />
  </SvgIcon>
);

const SpringIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.spring} fill='#6DB33F' />
  </SvgIcon>
);

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop < 50) {
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
    if (!buttonClicked && skills.length > 0) {
      navigate('/loading', { state: skills });
    }
    setButtonClicked(true);
  };

  return (
    <CustomContainer>
      <Header />

      <div
        ref={containerRef}
        style={{
          width: '100vw !important',
          height: 'calc(100vh - 80px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          overflow: 'hidden',
          position: 'relative',
          transform: 'translateY(80px)',
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
          }}
        >
          Create Set
        </Button>

        <MotionDiv
          drag
          dragElastic={2}
          dragConstraints={containerRef}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
          }}
        >
          <ReactIcon />
        </MotionDiv>
        <MotionDiv
          drag
          dragElastic={2}
          dragConstraints={containerRef}
          style={{
            position: 'absolute',
            top: '20%',
            right: '20%',
          }}
        >
          <NodeJSIcon />
        </MotionDiv>
        <MotionDiv
          drag
          dragElastic={2}
          dragConstraints={containerRef}
          style={{
            position: 'absolute',
            top: '30%',
            left: '13%',
          }}
        >
          <JavascriptIcon />
        </MotionDiv>
        <MotionDiv
          drag
          dragElastic={2}
          dragConstraints={containerRef}
          style={{
            position: 'absolute',
            bottom: '17%',
            left: '25%',
          }}
        >
          <SpringIcon />
        </MotionDiv>
      </div>

      <div
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
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
              width: '550px',
              animation: scroll ? `${fadeFromRight} 1s` : '',
              display: scroll ? '' : 'none',
            }}
          >
            <img
              width='550px'
              src='https://user-images.githubusercontent.com/59170680/219634902-3ba561ac-cc65-4e1f-aff7-310fd100266e.gif'
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
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: '500px',
              animation: scroll ? `${fadeFromLeft} 1s` : '',
              display: scroll ? '' : 'none',
            }}
          >
            <img
              width='500px'
              src='https://user-images.githubusercontent.com/59170680/219640020-46b1972a-968d-495d-8f82-00bb90f03357.png'
              alt='create your own skill sets'
              loading='lazy'
            />
          </Box>
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
      </div>
    </CustomContainer>
  );
};

export default Home;
