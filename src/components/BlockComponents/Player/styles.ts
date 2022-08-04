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
  font-size: ${fonts.fontSizes.sm};
  font-weight: ${fonts.fontWeight.sm};
`;

const PlayerVolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & svg:first-child {
    font-size: ${fonts.fontSizes.lg};
  }
`;

const PlayerVolumeBar = styled.div`
  width: 4rem;
  height: 0.3rem;
  border-radius: 0.5rem;
  background-color: ${colors.light.accent};
  overflow: hidden;

  & span {
    height: 100%;
    background-color: ${colors.light.accent};
  }

  & svg {
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: -5px;
    margin-left: -10px;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.18rem solid ${colors.light.accent};
    border-radius: 100%;
    background-color: ${colors.main.accent};
    fill: ${colors.main.accent};
    box-shadow: 0 1px 6px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const PlayerProgressBarContainer = styled.div`
  width: 20rem;
  height: 0.3rem;
  border-radius: 0.5rem;
  background-color: ${colors.light.accent};
  overflow: hidden;

  & span {
    height: 100%;
    background-color: ${colors.light.accent};
  }

  & svg {
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: -5px;
    margin-left: -10px;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.18rem solid ${colors.light.accent};
    border-radius: 100%;
    background-color: ${colors.main.accent};
    fill: ${colors.main.accent};
    box-shadow: 0 1px 6px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const PlayerMainButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.fontSizes.xl};

  & svg {
    cursor: pointer;
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
