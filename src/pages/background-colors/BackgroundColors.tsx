import styled from '@emotion/styled';
import { Box, Container, styled as styledMUI, Typography } from '@mui/material';
import Header from 'components/header';
import Stacks from 'components/stacks';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BgColorOption } from 'types/backgroundColors';

const CustomContainer = styled.div`
  width: 100vw;
  height: 100vh;

  justify-content: center;

  padding-top: 13.0625rem;
`;

const StackContainer = styledMUI(Box)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    outline: `5px solid ${theme.palette.success.main}`,
    h1: {
      opacity: 1,
    },
  },
}));

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
`;

const BackgroundColors = () => {
  const [colorSelected, setColorSelected] = useState(false);
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
          <StackContainer onClick={() => submitSkills('black')}>
            <Stacks ref={targetRef} selecteds={state} color='black' />
            <Color color='white'>BLACK</Color>
          </StackContainer>
          <StackContainer onClick={() => submitSkills('white')}>
            <Stacks ref={targetRef} selecteds={state} color='white' />
            <Color color='black'>WHITE</Color>
          </StackContainer>
        </Container>
      </CustomContainer>
    </div>
  );
};

export default BackgroundColors;
