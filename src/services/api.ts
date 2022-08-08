import axios from "axios";
import { Buffer } from "buffer";
import qs from "qs";

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  "utf-8"
).toString("base64");

const getAuth = async () => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth_token}`,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

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
    .catch((err) => console.log(err));

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

const filterTracksPlaylist = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject[]>
) => {
  const tracksList = tracks.items.map(
    (track: SpotifyApi.PlaylistTrackObject) => {
      return {
        id: track.track.id,
        title: track.track.name,
        length: track.track.duration_ms,
        track_number: track.track.disc_number,
        song_url: track.track.preview_url,
        artists: track.track.artists.map((artist) => {
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

const getTrackImage = async (track_id: string) => {
  const access_token = await getAuth();

  const api_url = `${import.meta.env.VITE_BASE_URL}/tracks/${track_id}`;
  const response = await axios.get(api_url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const trackResponse = await response.data;

  return trackResponse.album.images[0].url;
};

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

const getPlaylistData = async (
  playlistData: SpotifyApi.SinglePlaylistResponse
) => {
  const tracks = filterTracksPlaylist(playlistData.tracks);
  const artists = [
    { id: 1, name: "Artista1" },
    { id: 2, name: "Artista2" },
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

const searchQuery = async (keyword: string) => {
  const access_token = await getAuth();

  const api_url = `${
    import.meta.env.VITE_BASE_URL
  }/search?q=${keyword}&type=album,track,artist`;

  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getPlaylist,
  searchQuery,
  filterArtistsList,
  filterTracksList,
  getAlbum,
  filterTracksPlaylist,
};
