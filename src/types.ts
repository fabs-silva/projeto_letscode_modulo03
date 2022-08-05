import { IconType } from 'react-icons';

type IToken = {
  token: string;
};

type IProfile = {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
};

type ICard = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
  type?: string;
};

type ISongItem = {
  id: string;
  track: number;
  title: string;
  artists: string[];
  length: number;
};

type IMusicItem = {
  id: string;
  type: string;
  title: string;
  image: string;
  artistsOrOwner: string[];
  year?: number;
  label?: string;
  numberItems?: number;
};

type ISongPlaying = {
  id: string;
  title: string;
  artists: string[];
  length: number;
  image: string;
  url: string;
};

type IArtist = {
  id: string;
  image: string;
  country: string;
  flag: string;
  name: string;
  listeners: number;
};

type IPlaylist = {
  id: string;
  title: string;
  icon: IconType;
  link: string;
};

type IAuthContext = {
  isLoggedIn: boolean;
  loading: boolean;
  callbackLogin: IProfile | Error | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export type {
  IToken,
  ICard,
  ISongItem,
  IMusicItem,
  IProfile,
  ISongPlaying,
  IArtist,
  IPlaylist,
  IAuthContext,
};
