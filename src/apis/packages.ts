import axios from 'axios';

export const getPackageJSONObject = async (path: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: path,
    });

    return response;
  } catch (error) {
    throw new Error('Invalid repository path.\nPlease input root of web application path');
  }
};
