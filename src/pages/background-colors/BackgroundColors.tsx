import styled from '@emotion/styled';
import { Box, Container, styled as styledMUI, Typography } from '@mui/material';
import Header from 'components/header';
import Stacks from 'components/stacks';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BgColorOption } from 'types/backgroundColors';

const CustomContainer = styled.div`
  width: 100vw;
  height: fit-content;

  min-height: 100vh;

  justify-content: center;

  padding-top: 13.0625rem;
`;

const StackContainer = styledMUI(Box)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    outline: `7px solid ${theme.palette.p[3]}`,
    borderRadius: '8px',
    h1: {
      opacity: 1,
    },
  },
  zIndex: 1,
}));

const Hider = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  z-index: 5;

  background-color: rgba(10, 19, 32, 0.5);

  border-radius: 8px;
`;

const Color = styled.h1<{ color: string }>`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  color: ${(props) => props.color};

  z-index: 10;
`;

const BackgroundColors = () => {
  const [colorSelected, setColorSelected] = useState(false);
  const [hideBlack, setHideBlack] = useState(false);
  const [hideWhite, setHideWhite] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const targetRef = useRef<HTMLDivElement>(null);

  const submitSkills = (color: BgColorOption['color']) => {
    const bgColor = color;

    if (!colorSelected && state) {
      setColorSelected(true);
      navigate(`/loading/${bgColor}`, { state });
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        position: 'relative',
      }}
    >
      <Header />
      <CustomContainer>
        <Typography textAlign='center' p={5} fontWeight='800' fontSize='70px' color='cg.1'>
          Choose Color
        </Typography>

        <Container
          sx={{
            width: '100%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5rem',
            marginTop: '2.8125rem',
          }}
        >
          <StackContainer
            onClick={() => submitSkills('black')}
            onMouseEnter={() => setHideBlack(true)}
            onMouseLeave={() => setHideBlack(false)}
          >
            <Stacks ref={targetRef} selecteds={state} color='black' />
            {hideBlack && <Hider />}
            <Color color='white'>BLACK</Color>
          </StackContainer>
          <StackContainer
            onClick={() => submitSkills('white')}
            onMouseEnter={() => setHideWhite(true)}
            onMouseLeave={() => setHideWhite(false)}
          >
            <Stacks ref={targetRef} selecteds={state} color='white' />
            {hideWhite && <Hider />}
            <Color color='white'>WHITE</Color>
          </StackContainer>
        </Container>
      </CustomContainer>
    </div>
  );
};

export default BackgroundColors;
