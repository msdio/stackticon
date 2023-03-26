import { Box } from '@mui/material';
import Stack from 'components/stack/Stack';
import { forwardRef } from 'react';
import type { BgColorOption } from 'types/backgroundColors';

interface StacksProps {
  color: BgColorOption;
  selecteds: string[];
}

const Stacks = forwardRef<HTMLDivElement, StacksProps>(({ color, selecteds }, targetRef) => {
  return (
    <Box
      ref={targetRef}
      bgcolor={'common.' + color}
      display='grid'
      gridTemplateRows='auto'
      gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
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
Stacks.displayName = 'Stacks';

export default Stacks;
