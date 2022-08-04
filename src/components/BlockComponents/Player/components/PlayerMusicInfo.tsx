import { Link } from 'react-router-dom';
import { ISongPlaying } from '../../../../types';
import {
  PlayerMusicInfoAlbumImage,
  PlayerMusicInfoArtistName,
  PlayerMusicInfoContainer,
  PlayerMusicInfoSong,
  PlayerMusicInfoSongTitle,
} from '../styles';

export function PlayerMusicInfo(props: { song: ISongPlaying }) {
  return (
    <PlayerMusicInfoContainer>
      <PlayerMusicInfoAlbumImage>
        <img src={props.song.image} alt={props.song.title} />
      </PlayerMusicInfoAlbumImage>
      <PlayerMusicInfoSong>
        <PlayerMusicInfoSongTitle>
          <Link to="#">{props.song.title}</Link>
        </PlayerMusicInfoSongTitle>
        <PlayerMusicInfoArtistName>
          {props.song.artists.map((artist: string, i: number) => (
            <Link to="#" key={i}>
              <span>{artist}</span>
            </Link>
          ))}
        </PlayerMusicInfoArtistName>
      </PlayerMusicInfoSong>
    </PlayerMusicInfoContainer>
  );
}
