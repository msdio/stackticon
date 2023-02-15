import Stack from 'components/stack/Stack';
import React from 'react';

const Stacks = React.forwardRef<HTMLDivElement>((props: any, targetRef) => {
  const stackArr = ['Javascript', 'React', 'Typescript'];
  return (
    <div
      ref={targetRef}
      style={{
        margin: '50px',
        padding: '50px',
        display: 'grid',
        gridTemplateRows: '1fr ',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        backgroundColor: 'gray',
      }}
    >
      {stackArr.map((stack) => (
        <Stack key={stack} stackName={stack}></Stack>
      ))}
    </div>
  );
});
Stacks.displayName = 'Stacks';

export default Stacks;
