import { IArtist } from '../../types';
import { getResponse } from './apiResponse';

const ARTIST_URL = `${import.meta.env.VITE_BASE_URL}/artists/`;

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

export const getSingleArtist = (artist: SpotifyApi.ArtistObjectFull) => {
  const artistPromise = getResponse(`${ARTIST_URL}${artist.id}`);

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
      const artistData = await getResponse(`${ARTIST_URL}${artist.id}`);
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
