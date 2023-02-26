import styled from '@emotion/styled';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import DraggableIcon from 'components/draggable-icon';
import Header from 'components/header';
import Input from 'components/input';
import { Svg } from 'constants/Svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fadeFromLeft, fadeFromRight } from '../../constants/animations';

const CustomContainer = styled.div`
  width: 100%;
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
  const [scroll, setScroll] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries[0].isIntersecting ? setScroll(true) : setScroll(false);
      },
      { threshold: 0.1 },
    );
    io.observe(observerRef.current as HTMLElement);
  }, []);

  const changeSkillSet = (inputSkills: string[]) => {
    setSkills(inputSkills);
  };

  const submitSkills = () => {
    if (!buttonClicked && skills.length > 0) {
      navigate('/loading', { state: skills });
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

        <DraggableIcon constraints={containerRef} icon={<ReactIcon />} bottom='10%' right='5%' />
        <DraggableIcon constraints={containerRef} icon={<NodeJSIcon />} top='20%' right='20%' />
        <DraggableIcon constraints={containerRef} icon={<JavascriptIcon />} top='30%' left='13%' />
        <DraggableIcon constraints={containerRef} icon={<SpringIcon />} bottom='17%' left='25%' />
      </div>

      <div
        ref={observerRef}
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
          <Box
            sx={{
              animation: scroll ? `${fadeFromRight} 1s` : '',
              display: scroll ? '' : 'none',
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
