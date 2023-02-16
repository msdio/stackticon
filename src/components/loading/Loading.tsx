import Stacks from 'components/stacks';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state.length === 0) {
      navigate('/');
      // 깜빡거리는 issue 발생. cover component를 만들어서 해결 가능할거라 예상
    }
  }, []);

  return (
    <div>
      <Stacks ref={targetRef} selecteds={state} />
    </div>
  );
};

export default Loading;
