import { Box } from '@mui/material';
import Stack from 'components/stack/Stack';
import React, { forwardRef } from 'react';

interface Props {
  selecteds: string[];
}

const Stacks = forwardRef<HTMLDivElement, Props>(({ selecteds }, targetRef) => {
  return (
    <Box
      ref={targetRef}
      bgcolor='common.black'
      display='grid'
      gridTemplateRows='auto'
      gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
      color='common.white'
      width='700px'
      height='auto'
    >
      {selecteds.map((select: string) => (
        <Stack key={select} stackName={select}></Stack>
      ))}
    </Box>
  );
});
Stacks.displayName = 'Stacks';

export default Stacks;
