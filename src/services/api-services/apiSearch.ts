import { getResponse } from './apiResponse';

const searchQuery = async (keyword: string) => {
  const api_url = `${
    import.meta.env.VITE_BASE_URL
  }/search?q=${keyword}&type=album,track,artist`;

  const response = getResponse(api_url);

  return response;
};

export { searchQuery };
