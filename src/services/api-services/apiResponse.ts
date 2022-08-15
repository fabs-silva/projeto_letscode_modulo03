import axios from 'axios';
import { Buffer } from 'buffer';
import qs from 'qs';

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  'utf-8'
).toString('base64');

const getAuth = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${auth_token}`,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    return error;
  }
};

const getResponse = async (url: string) => {
  const access_token = await getAuth();

  const response = await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch((error: Error) => {
      return error;
    });

  if (!response) {
    return null;
  }

  return response;
};

export { getResponse };
