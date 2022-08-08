import axios from 'axios';
import { getAuth } from './api';

const getArtist = async (artist_id: string) => {
  const access_token = await getAuth();

  const api_url = `${import.meta.env.VITE_BASE_URL}/artist/${artist_id}`;
  const response = await axios
    .get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .then((artistData) => {
      return {
        id: artistData.id,
        name: artistData.name,
        image: artistData.images[0].url,
      };
    })
    .catch((err: Error) => console.log(err));

  return response;
};

const filterArtistsList = async (artists: SpotifyApi.ArtistObjectFull[]) => {
  const artistsArray = artists.map(
    async (artist: SpotifyApi.ArtistObjectFull) => {
      const artistData = await getArtist(artist.id);
      return artistData;
    }
  );

  return artistsArray;
};

export { getArtist, filterArtistsList };
