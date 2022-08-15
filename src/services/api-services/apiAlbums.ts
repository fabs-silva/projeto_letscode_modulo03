import { IAlbum, IArtist, ITrack } from '../../types';
import { getResponse } from './apiResponse';

import { filterTracksList } from './apiTracks';

const ALBUM_URL = `${import.meta.env.VITE_BASE_URL}/albums/`;

const createNewAlbum = (result: any): IAlbum | null => {
  const albumResponse = result.value;

  if (!albumResponse) {
    return null;
  }

  const tracks = filterTracksList(albumResponse.tracks);
  const artists = albumResponse.artists;
  const updatedTrackList: ITrack[] = tracks.map((track) => {
    return { ...track, image: albumResponse.images[0].url };
  });

  const newAlbum: IAlbum = {
    id: albumResponse.id,
    image: albumResponse.images[0].url,
    title: albumResponse.name,
    tracks: updatedTrackList,
    totalTracks: albumResponse.tracks.total,
    year: albumResponse.release_date,
    type: albumResponse.album_type,
    artists: artists.map((artist: IArtist) => {
      return {
        id: artist.id,
        name: artist.name,
      };
    }),
  };

  return newAlbum;
};

export const getAlbum = (album: SpotifyApi.AlbumObjectFull) => {
  const albumPromise = getResponse(`${ALBUM_URL}${album.id}`);

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
