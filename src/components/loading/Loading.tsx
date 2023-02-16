import Stacks from 'components/stacks';
import { toPng } from 'html-to-image';
import Page404 from 'pages/page404';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getCreatedImageUrl } from 'services/firebase/storage';

const Loading = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { state } = useLocation();
  console.log(state);

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
        <Page404 />
      ) : (
        <div>
          <Stacks ref={targetRef} selecteds={state} />
        </div>
      )}
    </>
  );
};

export default Loading;
