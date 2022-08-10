import { IconType } from 'react-icons';
import { NavigateFunction } from 'react-router-dom';

type IProfile = {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
};

type IAuthContext = {
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
};

type ICard = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
  type?: string;
};

type IPlaylist = {
  id: string;
  image: string;
  title: string;
  owner: string;
  tracks: ITrack[];
  totalTracks: number;
  icon?: IconType;
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

type ITrack = {
  id: string;
  title: string;
  length: number;
  artists?: IArtist[];
  track_number?: number;
  song_url: string;
  image?: string;
};

type IArtist = {
  id: string;
  name: string;
  image?: string;
};

export type {
  IProfile,
  IAuthContext,
  ICard,
  IPlaylist,
  ITrack,
  IArtist,
  IAlbum,
};
