import styled from "styled-components";
import { ITrack } from "../../../types";
import { SongItem } from "../SongItem";

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-row: 1 / 3;
`;

export function ItemList(props: { tracks: ITrack[] }) {
  return (
    <ItemListContainer>
      {props.tracks.map((track, i) => {
        return <SongItem key={track.id} song={track} index={i} />;
      })}
    </ItemListContainer>
  );
}
