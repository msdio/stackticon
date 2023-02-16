import type { StorageReference } from 'firebase/storage';
import { uploadString } from 'firebase/storage';
import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from './initialize';

const makeImageRef = () => {
  const miliseconds = new Date().getTime().toString();
  const baseRef = ref(storage, `images/${miliseconds}`);
  return baseRef;
};

const downloadImageURL = async (downLoadRef: StorageReference) => {
  const url = await getDownloadURL(downLoadRef);
  if (url) {
    return url;
  }
  throw new Error('에러가 발생했습니다. 이미지 주소를 받아오지 못했습니다');
};

const uploadImageByString = async (imageRef: string) => {
  const stackImageRef = makeImageRef();
  const uploadRes = await uploadString(stackImageRef, imageRef, 'data_url');
  if (uploadRes) {
    return uploadRes;
  }
  throw new Error('에러가 발생했습니다. 이미지를 생성하지 못했습니다');
};

export const getCreatedImageUrl = async (imageRef: string) => {
  const uploaded = await uploadImageByString(imageRef);

  if (uploaded) {
    return downloadImageURL(uploaded.ref);
  }
};
