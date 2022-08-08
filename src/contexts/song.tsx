import { createContext, useRef, useState } from "react";
import { ITrack } from "../types";

export const SongContext = createContext({} as ISongProvider);

type ISongProvider = {
  $songPlayer: any;
  songPlaying: ITrack;
  setSongPlaying: (song: ITrack) => void;
};

export const SongProvider = (props: { children: React.ReactNode }) => {
  const $songPlayer = useRef(null);
  const [songPlaying, setSongPlaying] = useState<ITrack>({} as ITrack);
  return (
    <SongContext.Provider value={{ $songPlayer, songPlaying, setSongPlaying }}>
      {props.children}
    </SongContext.Provider>
  );
};
