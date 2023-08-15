import { forwardRef } from 'react';

import { Box } from '@mui/material';

import Stack from 'components/stack/Stack';

import type { BgColorOption } from 'types/backgroundColors';

interface StacksProps {
  color: BgColorOption;
  selecteds: string[];
}

const StackGroup = forwardRef<HTMLDivElement, StacksProps>(({ color, selecteds }, targetRef) => {
  return (
    <Box
      ref={targetRef}
      bgcolor={'common.' + color}
      display='grid'
      gridTemplateRows='auto'
      gridTemplateColumns='repeat(6, 1fr)'
      color={color === 'black' ? 'common.white' : 'common.black'}
      fontWeight='bold'
      width='700px'
      height='auto'
      padding='25px 35px'
      border='1px solid #b3bacd'
      borderRadius='8px'
    >
      {selecteds.map((select: string) => (
        <Stack key={select} stackName={select}></Stack>
      ))}
    </Box>
  );
});
StackGroup.displayName = 'StackGroup';

export default StackGroup;
