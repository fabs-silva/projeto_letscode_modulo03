import { IPlaylist } from "../../../types";
import { PlaylistInfoContainer } from "./styles";

export function PlaylistInfo(props: { item: IPlaylist }) {
  return (
    <PlaylistInfoContainer>
      <img src={props.item.image} alt={props.item.title} />
      <h1>{props.item.title} </h1>
      <h2>Playlist by {props.item.owner}</h2>
      <p>
        {props.item.totalTracks}{" "}
        {props.item.totalTracks > 1 ? " tracks" : " track"}
      </p>
    </PlaylistInfoContainer>
  );
}
