import Stacks from 'components/stacks';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Loading = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Stacks ref={targetRef} />
    </div>
  );
};

export default Loading;
