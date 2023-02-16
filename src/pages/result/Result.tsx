import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  console.log(state);
  const clickCopyUrl = () => {
    console.log('temp');
  };
  return (
    <div>
      <div>image</div>
      <div>
        <button onClick={clickCopyUrl}>url 복사하기</button>
        <button>다시 만들기</button>
      </div>
    </div>
  );
};

export default Result;
