import Stacks from 'components/stacks';
import Page404 from 'pages/page404';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCreatedImageUrl } from 'services/firebase/storage';
import { pngToImage } from 'utils/imageConverter';

const Loading = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const { state } = useLocation();

  const navigateToResult = (resultUrl: string) => {
    navigate('/result', { state: resultUrl });
  };

  const makeResult = async () => {
    const imageRef = await pngToImage(targetRef);
    const resultUrl = imageRef && (await getCreatedImageUrl(imageRef));
    if (resultUrl) {
      navigateToResult(resultUrl);
    }
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
