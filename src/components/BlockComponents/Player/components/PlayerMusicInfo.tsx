import { Link } from "react-router-dom";
import { IArtist, ITrack } from "../../../../types";
import {
  PlayerMusicInfoAlbumImage,
  PlayerMusicInfoArtistName,
  PlayerMusicInfoContainer,
  PlayerMusicInfoSong,
  PlayerMusicInfoSongTitle,
} from "../styles";

export function PlayerMusicInfo(props: { song: ITrack }) {
  return (
    <PlayerMusicInfoContainer>
      {props.song ? (
        <>
          <PlayerMusicInfoAlbumImage>
            <img src={props.song.image} alt={props.song.title} />
          </PlayerMusicInfoAlbumImage>
          <PlayerMusicInfoSong>
            <PlayerMusicInfoSongTitle>
              <Link to={`/album/${props.song.id}`}>{props.song.title}</Link>
            </PlayerMusicInfoSongTitle>
            <PlayerMusicInfoArtistName>
              {props.song.artists !== undefined &&
                props.song.artists.map((artist: IArtist, i: number) => [
                  i > 0 && ", ",
                  <Link to={`/artist/${artist.id}`} key={artist.id}>
                    {artist.name}
                  </Link>,
                ])}
            </PlayerMusicInfoArtistName>
          </PlayerMusicInfoSong>
        </>
      ) : null}
    </PlayerMusicInfoContainer>
  );
}
