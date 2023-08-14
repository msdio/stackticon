import styled from '@emotion/styled';
import { Box, styled as styledMUI } from '@mui/material';
import { type PropsWithChildren, useState } from 'react';
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

const Label = styled.h1<{ color: BgColorOption }>`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};

  z-index: 10;
`;

interface SelectionProps extends PropsWithChildren {
  onClick: () => void;
  isMobile: boolean;
  label: string;
  color: BgColorOption;
}

const Selection = ({ children, onClick, isMobile, label, color }: SelectionProps) => {
  const [hide, setHide] = useState(false);

  return (
    <Container
      onClick={onClick}
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => setHide(false)}
      sx={{
        scale: isMobile ? '0.5' : '1',
        transform: isMobile ? 'translateY(-10rem)' : '0',
      }}
    >
      {children}
      {hide && <Hider />}
      <Label color={color}>{label.toUpperCase()}</Label>
    </Container>
  );
};

export default Selection;
