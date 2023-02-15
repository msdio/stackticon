import Stacks from 'components/stacks';
import { useRef } from 'react';

const Loading = (props: any) => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Stacks ref={targetRef} />
    </div>
  );
};

export default Loading;
