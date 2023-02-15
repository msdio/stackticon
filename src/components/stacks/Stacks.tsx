import Stack from 'components/stack/Stack';
import React from 'react';

const Stacks = React.forwardRef<HTMLDivElement>((props: any, targetRef) => {
  const stackArr = ['Javascript', 'React', 'Typescript'];
  return (
    <div ref={targetRef}>
      {stackArr.map((stack) => (
        <Stack key={stack} stackName={stack}></Stack>
      ))}
    </div>
  );
});
Stacks.displayName = 'Stacks';

export default Stacks;
