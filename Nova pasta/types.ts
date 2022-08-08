import { IconType } from "react-icons";

type IToken = {
  token: string;
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
  icon?: IconType;
};
