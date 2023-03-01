import styled from '@emotion/styled';
import { Box, Container, styled as styledMUI, Typography } from '@mui/material';
import Stacks from 'components/stacks';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BgColorOption } from 'types/backgroundColors';

const CustomContainer = styled.div`
  width: 100vw;
  height: 100vh;

  justify-content: center;
`;

const StackContainer = styledMUI(Box)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    border: `5px solid ${theme.palette.success.main}`,
  },
}));

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
    <CustomContainer>
      <Typography variant='h3' textAlign='center' p={5}>
        Choose Color
      </Typography>

      <Container
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <StackContainer onClick={() => submitSkills('black')}>
          <Stacks ref={targetRef} selecteds={state} color='black' />
        </StackContainer>
        <StackContainer onClick={() => submitSkills('white')}>
          <Stacks ref={targetRef} selecteds={state} color='white' />
        </StackContainer>
      </Container>
    </CustomContainer>
  );
};

export default BackgroundColors;
