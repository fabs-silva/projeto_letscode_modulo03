import { ItemList } from "../../../components/BlockComponents/ItemList";
import { IPlaylist } from "../../../types";
import { PlaylistInfo } from "./PlaylistInfo";

export function PlaylistItem(props: { playlist: IPlaylist }) {
  return (
    <>
      <PlaylistInfo item={props.playlist} />
      <ItemList tracks={props.playlist.tracks} />
    </>
  );
}
