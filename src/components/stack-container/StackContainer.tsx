import styled from '@emotion/styled';
import { Box, styled as styledMUI } from '@mui/material';
import StackGroup from 'components/stack-group';
import { useRef, useState } from 'react';
import type { Location } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import type { BgColorOption } from 'types/backgroundColors';

const Container = styledMUI(Box)(({ theme }) => ({
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

const Color = styled.h1`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  color: white;

  z-index: 10;
`;

interface StackContainerProps {
  selectedColor: BgColorOption;
  state: Location['state'];
  isMobile: boolean;
}

const StackContainer = ({ selectedColor, state, isMobile }: StackContainerProps) => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);

  const submitSkills = (color: BgColorOption) => {
    const bgColor = color;

    if (color && state) {
      navigate(`/loading/${bgColor}`, { state });
    }
  };

  return (
    <Container
      onClick={() => submitSkills(selectedColor)}
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => setHide(false)}
      sx={{
        scale: isMobile ? '0.5' : '1',
        transform: isMobile ? 'translateY(-10rem)' : '0',
      }}
    >
      <StackGroup ref={targetRef} selecteds={state} color={selectedColor} />
      {hide && <Hider />}
      <Color>{selectedColor.toUpperCase()}</Color>
    </Container>
  );
};

export default StackContainer;
