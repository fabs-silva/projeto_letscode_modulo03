import { createContext, useRef } from 'react';
import song from '../assets/musica_teste.mp3';
import { ISongPlaying } from '../types';

export const SongContext = createContext({} as ISongProvider);

type ISongProvider = {
  $songPlayer: any;
  songPlaying?: ISongPlaying;
};

const songPlaying: ISongPlaying = {
  id: '1',
  title: 'Nigel ',
  artists: ['Joan Franka'],
  length: 181,
  image: 'https://i.scdn.co/image/ab67616d0000b27386e3ea26fc22095f00120bb4',
  url: song,
};

export const SongProvider = (props: { children: React.ReactNode }) => {
  const $songPlayer = useRef(null);

  return (
    <SongContext.Provider value={{ $songPlayer, songPlaying }}>
      {props.children}
    </SongContext.Provider>
  );
};
