import { Link } from "react-router-dom";
import { IAlbum } from "../../../types";
import { AlbumInfoContainer } from "./styles";

export function AlbumInfo(props: { item: IAlbum }) {
  return (
    <AlbumInfoContainer>
      <img src={props.item.image} alt={props.item.title} />
      <h1>{props.item.title} </h1>
      <h2>
        {props.item.artists.map((artist, i) => [
          i > 0 && ", ",
          <Link to={`/artist/${artist.id}`} key={artist.id}>
            {artist.name}
          </Link>,
        ])}
      </h2>
      <p>
        {new Date(props.item.year).getFullYear()} - {props.item.totalTracks}
        {props.item.totalTracks > 1 ? " tracks" : " track"}
      </p>
    </AlbumInfoContainer>
  );
}
