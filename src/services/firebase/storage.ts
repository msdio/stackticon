import type { StorageReference } from 'firebase/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from './initialize';

const makeImageRef = (imageRef: string) => {
  const baseRef = ref(storage, `images/${imageRef}`);
  return baseRef;
};

export const downloadImageURL = async (downLoadRef: StorageReference) => {
  const url = await getDownloadURL(downLoadRef);
  if (url) {
    return url;
  }
  throw new Error('에러가 발생했습니다. 이미지 주소를 받아오지 못했습니다');
};

export const uploadImageByBytes = async (
  imageRef: string,
  image: Blob | Uint8Array | ArrayBuffer,
) => {
  const stackImageRef = makeImageRef(imageRef);
  const uploadRes = await uploadBytes(stackImageRef, image);
  if (uploadRes) {
    downloadImageURL(uploadRes.ref);
  }
  throw new Error('에러가 발생했습니다. 이미지를 생성하지 못했습니다');
};
