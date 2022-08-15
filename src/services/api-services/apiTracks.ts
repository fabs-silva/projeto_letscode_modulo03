import { IArtist, ITrack } from '../../types';

const filterTracksList = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
) => {
  const tracksList = tracks.items.map((track: SpotifyApi.TrackObjectFull) => {
    const fullTrack: ITrack = {
      id: track.id,
      title: track.name,
      length: track.duration_ms,
      track_number: track.disc_number,
      song_url: track.preview_url,
      artists: track.artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      }),
    };
    return fullTrack;
  });
  return tracksList;
};

const filterTracksPlaylist = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>
) => {
  if (tracks.items.length === 0) {
    return null;
  }

  const tracksList = tracks.items.map(
    (track: SpotifyApi.PlaylistTrackObject) => {
      if (!track.track) {
        return {} as ITrack;
      }

      const fullTrack: ITrack = {
        id: track.track.id,
        title: track.track.name,
        length: track.track.duration_ms,
        track_number: track.track.disc_number,
        song_url: track.track.preview_url,
        image: track.track.album.images[0].url,
        artists: track.track.artists.map((artist: IArtist) => {
          return {
            id: artist.id,
            name: artist.name,
          };
        }),
      };
      return fullTrack;
    }
  );
  return tracksList;
};
export { filterTracksList, filterTracksPlaylist };
