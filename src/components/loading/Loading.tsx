import Stacks from 'components/stacks';
import { toPng } from 'html-to-image';
import { useEffect, useRef } from 'react';
import { getCreatedImageUrl } from 'services/firebase/storage';

const Loading = (props: any) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const getPngToImage = async () => {
    if (targetRef.current === null) {
      return;
    }

    const dataUrl = await toPng(targetRef.current, { cacheBust: true });
    return dataUrl;
  };

  const makeResult = async () => {
    const imageRef = await getPngToImage();
    const resultUrl = await getCreatedImageUrl(imageRef!);
    console.log(resultUrl);
  };

  useEffect(() => {
    makeResult();
  }, []);
  return (
    <div>
      <div ref={targetRef}></div>
      <Stacks ref={targetRef} />
    </div>
  );
};

export default Loading;
