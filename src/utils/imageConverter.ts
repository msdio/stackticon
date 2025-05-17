import { toBlob } from 'html-to-image/lib/index';

export const htmlToPng = async (targetRef: React.RefObject<HTMLDivElement | null>) => {
  if (targetRef.current === null) {
    return;
  }

  const dataUrl = await toBlob(targetRef.current, { cacheBust: true });
  return dataUrl;
};
