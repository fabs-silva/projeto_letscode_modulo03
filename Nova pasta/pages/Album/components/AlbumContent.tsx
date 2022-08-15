import { ItemList } from "../../../components/BlockComponents/ItemList";
import { IAlbum } from "../../../types";
import { AlbumInfo } from "./AlbumInfo";

export function AlbumItem(props: { album: IAlbum }) {
  return (
    <>
      <AlbumInfo item={props.album} />
      <ItemList tracks={props.album.tracks} />
    </>
  );
}
