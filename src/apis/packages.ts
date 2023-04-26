import axios from 'axios';

export const getPackageJSONObject = async (path: string) => {
  const { data } = await axios({
    method: 'get',
    url: path,
  });

  return data;
};
