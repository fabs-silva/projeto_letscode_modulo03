import axios from 'axios';
import { IArtist } from '../types';
import { getAuth } from './api';

const createNewArtist = (result: any): IArtist | null => {
  const artistResponse = result.value;

  if (!artistResponse) {
    return null;
  }

  return {
    id: artistResponse.id,
    name: artistResponse.name,
    image: artistResponse.images[0].url,
  };
};

const getArtistResponse = async (artist_id: string) => {
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
    .catch((error: Error) => {
      return error;
    });

  if (!response) {
    return null;
  }

  return response;
};

export const getSingleArtist = (artist: SpotifyApi.ArtistObjectFull) => {
  const artistPromise = getArtistResponse(artist.id);

  if (!artistPromise) {
    return null;
  }

  let newArtist: IArtist = {} as IArtist;

  Promise.resolve(artistPromise).then((result) => {
    const createNew = createNewArtist(result);

    if (!createNew) {
      return;
    }

    newArtist = createNew;
  });

  return newArtist;
};

export const getArtistsList = (artists: SpotifyApi.ArtistObjectFull[]) => {
  const artistsPromiseArray = artists.map(
    async (artist: SpotifyApi.ArtistObjectFull) => {
      const artistData = await getArtistResponse(artist.id);
      return artistData;
    }
  );

  if (artistsPromiseArray.length === 0) {
    return null;
  }

  let artistsArray: IArtist[] = [];

  Promise.allSettled(artistsPromiseArray).then((results) => {
    results.forEach((result) => {
      const createNew = createNewArtist(result);

      if (!createNew) {
        return;
      }

      artistsArray.push(createNew);
    });
  });

  return artistsArray;
};
