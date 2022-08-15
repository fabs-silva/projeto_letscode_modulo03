import { IPlaylist, ITrack } from '../../types';
import { getResponse } from './apiResponse';
import { filterTracksPlaylist } from './apiTracks';

const PLAYLIST_URL = `${import.meta.env.VITE_BASE_URL}/playlists/`;

const createNewPlaylist = (playlistData: SpotifyApi.SinglePlaylistResponse) => {
  const tracks: ITrack[] | null = filterTracksPlaylist(playlistData.tracks);

  if (tracks === null || tracks.length === 0) {
    return null;
  }

  const newPlaylist: IPlaylist = {
    id: playlistData.id,
    image: playlistData.images[0].url,
    title: playlistData.name,
    tracks: tracks,
    totalTracks: playlistData.tracks.total,
    owner: playlistData.owner.display_name,
  };

  return newPlaylist;
};

const getPlaylist = async (playlist_id: string) => {
  const playlistPromise = getResponse(`${PLAYLIST_URL}${playlist_id}`);

  if (!playlistPromise) {
    return null;
  }

  let newPlaylist: IPlaylist = {} as IPlaylist;

  Promise.resolve(playlistPromise).then((result) => {
    const createNew = createNewPlaylist(result);

    if (!createNew) {
      return;
    }

    newPlaylist = createNew;
  });

  return newPlaylist;
};

export { getPlaylist };
