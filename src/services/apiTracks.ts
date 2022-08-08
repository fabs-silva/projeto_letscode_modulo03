const filterTracksList = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
) => {
  const tracksList = tracks.items.map((track: SpotifyApi.TrackObjectFull) => {
    const fullTrack = {
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

export { filterTracksList };
