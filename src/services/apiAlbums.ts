import axios from 'axios';
import { getAuth } from './api';
import { filterTracksList } from './apiTracks';

const getAlbumData = async (albumData: SpotifyApi.SingleAlbumResponse) => {
  const tracks = filterTracksList(albumData.tracks);
  const artists = albumData.artists;

  const newTrackList = tracks.map((track) => {
    return { ...track, image: albumData.images[0].url };
  });

  return {
    id: albumData.id,
    image: albumData.images[0].url,
    title: albumData.name,
    tracks: newTrackList,
    totalTracks: albumData.tracks.total,
    year: albumData.release_date,
    type: albumData.album_type,
    artists: artists.map((artist) => {
      return {
        id: artist.id,
        name: artist.name,
      };
    }),
  };
};

const getAlbum = async (album_id: string) => {
  const access_token = await getAuth();

  const api_url = `${import.meta.env.VITE_BASE_URL}/albums/${album_id}`;
  const response = await axios.get(api_url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const albumData: SpotifyApi.SingleAlbumResponse = await response.data;

  const album = await getAlbumData(albumData);

  return album;
};

export { getAlbum, getAlbumData };
