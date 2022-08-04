import styled from "styled-components";
import { albumTracks } from "../../../assets/albumTracks";
import { ISongItem } from "../../../types";
import { SongItem } from "../SongItem";

const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-row: 1 / 3;
`;

export function MusicList(props: { tracks: ISongItem[] }) {
  return (
    <MusicListContainer>
      {props.tracks.map((track) => {
        return <SongItem key={track.id} song={track} />;
      })}
    </MusicListContainer>
  );
}
