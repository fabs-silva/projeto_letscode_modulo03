import { Link } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { ISongPlaying } from "../../../types";

const { colors, fontSizes, fontWeight } = variables;

const MusicInfoContainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
`;

const MusicInfoAlbumImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  border: 2px solid ${colors.secondaryColor};
`;

const MusicInfoSong = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicInfoSongTitle = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeight.lg};
`;

const MusicInfoArtistName = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeight.sm};
`;

export function MusicInfo(props: { song: ISongPlaying }) {
  return (
    <MusicInfoContainer>
      <MusicInfoAlbumImage>
        <img src={props.song.image} alt={props.song.title} />
      </MusicInfoAlbumImage>
      <MusicInfoSong>
        <MusicInfoSongTitle>
          <Link to="#">{props.song.title}</Link>
        </MusicInfoSongTitle>
        <MusicInfoArtistName>
          {props.song.artists.map((artist: string, i: number) => (
            <Link to="#" key={i}>
              <span>{artist}</span>
            </Link>
          ))}
        </MusicInfoArtistName>
      </MusicInfoSong>
    </MusicInfoContainer>
  );
}
