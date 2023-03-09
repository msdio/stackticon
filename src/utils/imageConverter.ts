import { toPng } from 'html-to-image';

export const htmlToPng = async (targetRef: React.RefObject<HTMLDivElement>) => {
  if (targetRef.current === null) {
    return;
  }

  const dataUrl = await toPng(targetRef.current, { cacheBust: true });
  return dataUrl;
};
