import { IconType } from 'react-icons';

type IProfile = {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
};

/* type IAuthContext = {
  isLoggedIn: boolean;
  loading: boolean;
  loginPage: (status: boolean) => void;
  callbackLogin: Error | null;
  login: (
    username: string,
    password: string,
    navigate: NavigateFunction
  ) => void;
  logout: () => void;
  profile: IProfile;
  isLoginPage: boolean;
};*/

type ICard = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  type?: string;
};

type IArtist = {
  id: string;
  name: string;
  image?: string;
};

type ITrack = {
  id: string;
  title: string;
  length: number;
  song_url: string | null;
  artists?: IArtist[];
  track_number?: number;
  image?: string;
};

type IAlbum = {
  id: string;
  image: string;
  title: string;
  year: string;
  artists: IArtist[];
  tracks: ITrack[];
  totalTracks: number;
  type: string;
};

type IPlaylist = {
  id: string;
  image: string;
  title: string;
  owner: string | undefined;
  tracks: ITrack[];
  totalTracks: number;
  icon?: IconType;
};

export type {
  IProfile,
  /*   IAuthContext, */
  ICard,
  IPlaylist,
  ITrack,
  IArtist,
  IAlbum,
};
