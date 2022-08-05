import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fonts } = theme;

const PlayerContainer = styled.footer`
  grid-area: player;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  background-color: ${colors.dark.primaryDarker};
`;

const PlayerMainContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const PlayerTime = styled.p`
  width: 45px;
  font-size: ${fonts.fontSizes.sm};
  font-weight: ${fonts.fontWeight.sm};
  text-align: center;
`;

const PlayerVolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & svg:first-child {
    font-size: ${fonts.fontSizes.lg};
  }
`;

const PlayerVolumeBar = styled.input`
  width: 6.5rem;
  background-color: transparent;
`;

const PlayerProgressBarContainer = styled.input`
  width: 18rem;
  background-color: transparent;
`;

const PlayerMainButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & button {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: transparent;

    & svg {
      cursor: pointer;
      color: white;
      font-size: ${fonts.fontSizes.lg};
    }
  }
`;

const PlayerExtraButtonsContainer = styled.section`
  display: flex;
  gap: 1.25rem;
  width: 20%;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.fontSizes.lg};

  & svg {
    cursor: pointer;
  }
`;

const PlayerMusicInfoContainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
`;

const PlayerMusicInfoAlbumImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  border: 2px solid ${colors.main.secondary};

  & img {
    border-radius: 0.5rem;
  }
`;

const PlayerMusicInfoSong = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerMusicInfoSongTitle = styled.p`
  font-size: ${fonts.fontSizes.sm};
  font-weight: ${fonts.fontWeight.lg};
`;

const PlayerMusicInfoArtistName = styled.p`
  font-size: ${fonts.fontSizes.xs};
  font-weight: ${fonts.fontWeight.sm};
`;

export {
  PlayerContainer,
  PlayerMainContainer,
  PlayerTime,
  PlayerVolumeContainer,
  PlayerVolumeBar,
  PlayerProgressBarContainer,
  PlayerMainButtonsContainer,
  PlayerExtraButtonsContainer,
  PlayerMusicInfoContainer,
  PlayerMusicInfoAlbumImage,
  PlayerMusicInfoSong,
  PlayerMusicInfoSongTitle,
  PlayerMusicInfoArtistName,
};
