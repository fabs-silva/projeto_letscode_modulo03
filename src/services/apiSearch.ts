import axios from 'axios';
import { getAuth } from './api';

const searchQuery = async (keyword: string) => {
  const access_token = await getAuth();

  const api_url = `${
    import.meta.env.VITE_BASE_URL
  }/search?q=${keyword}&type=album,track,artist`;

  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { searchQuery };
