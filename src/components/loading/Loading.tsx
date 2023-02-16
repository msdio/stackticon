import Stacks from 'components/stacks';
import { toPng } from 'html-to-image';
import Page404 from 'pages/page404';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCreatedImageUrl } from 'services/firebase/storage';

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

  const getPngToImage = async () => {
    if (targetRef.current === null) {
      return;
    }

    const dataUrl = await toPng(targetRef.current, { cacheBust: true });
    return dataUrl;
  };

  const makeResult = async () => {
    const imageRef = await getPngToImage();
    const resultUrl = imageRef && (await getCreatedImageUrl(imageRef));
    console.log(resultUrl);
  };

  useEffect(() => {
    makeResult();
  }, []);

  return (
    <>
      {state === null || state.length === 0 ? (
        <Page404 title={'잘못된 경로로 접근하였습니다!'} />
      ) : (
        <div>
          <Stacks ref={targetRef} selecteds={state} />
        </div>
      )}
    </>
  );
};

export default Loading;
