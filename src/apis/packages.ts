import axios from 'axios';
import { PackageJSONType } from 'types/packageJson';

export const getPackageJSONObject = async (path: string) => {
  try {
    const response = await axios<PackageJSONType>({
      method: 'get',
      url: path,
    }).then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Invalid repository path.\nPlease input root of web application path');
  }
};
