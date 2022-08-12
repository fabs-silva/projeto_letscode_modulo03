import axios from 'axios';
import { IAlbum } from '../types';
import { getAuth } from './apiAuth';
import { filterTracksList } from './apiTracks';

const createNewAlbum = (result: any): IAlbum | null => {
  const albumResponse = result.value;

  if (!albumResponse) {
    return null;
  }

  const tracks = filterTracksList(albumResponse.tracks);
  const artists = albumResponse.artists;
  const newTrackList = tracks.map((track) => {
    return { ...track, image: albumResponse.images[0].url };
  });

  return {
    id: albumResponse.id,
    image: albumResponse.images[0].url,
    title: albumResponse.name,
    tracks: newTrackList,
    totalTracks: albumResponse.tracks.total,
    year: albumResponse.release_date,
    type: albumResponse.album_type,
    artists: artists.map((artist) => {
      return {
        id: artist.id,
        name: artist.name,
      };
    }),
  };
};

const getAlbumResponse = async (album_id: string) => {
  const access_token = await getAuth();

  const api_url = `${import.meta.env.VITE_BASE_URL}/albums/${album_id}`;
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

export const getAlbum = (album: SpotifyApi.AlbumObjectFull) => {
  const albumPromise = getAlbumResponse(album.id);

  if (!albumPromise) {
    return null;
  }

  let newAlbum: IAlbum = {} as IAlbum;

  Promise.resolve(albumPromise).then((result) => {
    const createNew = createNewAlbum(result);

    if (!createNew) {
      return;
    }

    newAlbum = createNew;
  });

  return newAlbum;
};
