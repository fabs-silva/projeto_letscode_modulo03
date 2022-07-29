import styled from 'styled-components';
import albumImage from '../../../assets/album-image.jpg';
import { variables } from '../../../styles/variables';

const { colors, fontSizes, fontWeight } = variables;

const MusicInfoContainer = styled.section`
  display: flex;
  gap: 1rem;
  width: 20%;
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

export function MusicInfo() {
  return (
    <MusicInfoContainer>
      <MusicInfoAlbumImage>
        <img src={albumImage} alt="Album image" />
      </MusicInfoAlbumImage>
      <MusicInfoSong>
        <MusicInfoSongTitle>O, Mamo</MusicInfoSongTitle>
        <MusicInfoArtistName>Salto Nazad</MusicInfoArtistName>
      </MusicInfoSong>
    </MusicInfoContainer>
  );
}
