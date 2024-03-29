import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from './initialize';

import type { StorageReference } from 'firebase/storage';

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

const uploadImageByString = async (imageRef: Blob) => {
  const stackImageRef = makeImageRef();
  const metaData = {
    contentType: 'image/png',
  };

  // const uploadRes = await uploadString(stackImageRef, imageRef, 'data_url');
  const uploadRes = await uploadBytes(stackImageRef, imageRef, metaData);
  if (uploadRes) {
    return uploadRes;
  }
  throw new Error('에러가 발생했습니다. 이미지를 생성하지 못했습니다');
};

export const getCreatedImageUrl = async (imageRef: Blob) => {
  const uploaded = await uploadImageByString(imageRef);

  if (uploaded) {
    return downloadImageURL(uploaded.ref);
  }
};
