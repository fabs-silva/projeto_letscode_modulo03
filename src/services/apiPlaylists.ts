import axios from 'axios';
import { getAuth } from './apiAuth';

const filterTracksPlaylist = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>
) => {
  const tracksList = tracks.items.map(
    (track: SpotifyApi.PlaylistTrackObject) => {
      return {
        id: track.track?.id,
        title: track.track?.name,
        length: track.track?.duration_ms,
        track_number: track.track?.disc_number,
        song_url: track.track?.preview_url,
        image: track.track?.album.images[0].url,
        artists: track.track?.artists.map((artist) => {
          return {
            id: artist.id,
            name: artist.name,
          };
        }),
      };
    }
  );

  return tracksList;
};

const getPlaylistData = async (
  playlistData: SpotifyApi.SinglePlaylistResponse
) => {
  const tracks = filterTracksPlaylist(playlistData.tracks);
  const artists = [
    { id: 1, name: 'Artista1' },
    { id: 2, name: 'Artista2' },
  ];

  return {
    id: playlistData.id,
    image: playlistData.images[0].url,
    title: playlistData.name,
    tracks: tracks,
    totalTracks: playlistData.tracks.total,
    owner: playlistData.owner.display_name,
    artists: artists.map((artist) => {
      return {
        id: artist.id,
        name: artist.name,
      };
    }),
  };
};

const getPlaylist = async (playlist_id: string) => {
  const access_token = await getAuth();

  const api_url = `${import.meta.env.VITE_BASE_URL}/playlists/${playlist_id}`;
  const response = await axios.get(api_url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const playlistData: SpotifyApi.SinglePlaylistResponse = await response.data;

  const playlist = await getPlaylistData(playlistData);

  return playlist;
};

export { filterTracksPlaylist, getPlaylistData, getPlaylist };
