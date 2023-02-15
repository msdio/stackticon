import Skills from 'components/skills';
import { useRef } from 'react';

const Loading = (props: any) => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Skills ref={targetRef} />
    </div>
  );
};

export default Loading;
