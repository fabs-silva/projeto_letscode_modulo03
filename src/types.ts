type IProfile = {
  id: number;
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
};

export type { ICard, ISongItem, IMusicItem, IProfile, ISongPlaying };
