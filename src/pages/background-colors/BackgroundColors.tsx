/* eslint-disable react/no-children-prop */
import { useRef } from 'react';
import { useNavigate } from 'react-router';

import { Box, Stack } from '@mui/material';

import BackgroundWithCircle from '@common/background-with-circle';
import HeadingText from '@common/heading-text';
import Header from 'components/header';
import HoverCard from 'components/hover-card';
import StackGroup from 'components/stack-group';
import { useStacks } from 'providers/StacksProvider';

import type { BgColorOption } from 'types/backgroundColors';

const BackgroundColors = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const { stacks } = useStacks();

  const submitColor = (color: BgColorOption) => {
    if (color) {
      navigate(`/loading/${color}`);
    }
  };

  return (
    <BackgroundWithCircle sx={{ overflow: 'hidden' }}>
      <Header isMain={false} />

      <Box
        width='100vw'
        height='100%'
        minHeight='100vh'
        justifyContent='center'
        paddingTop='8.125rem'
        position='relative'
        zIndex='5'
      >
        <HeadingText>Choose Color</HeadingText>

        <Stack alignItems={'center'} spacing={9} mt={'2.8125rem'}>
          <HoverCard
            label='black'
            color='black'
            onClick={() => submitColor('black')}
            children={<StackGroup ref={targetRef} selecteds={stacks} color='black' />}
          />
          <HoverCard
            label='white'
            color='white'
            onClick={() => submitColor('white')}
            children={<StackGroup ref={targetRef} selecteds={stacks} color='white' />}
          />
        </Stack>
      </Box>
    </BackgroundWithCircle>
  );
};

export default BackgroundColors;
