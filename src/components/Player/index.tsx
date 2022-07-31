import styled from "styled-components";
import { songPlaying } from "../../assets/albumTracks";
import { variables } from "../../styles/variables";
import { MusicInfo } from "./MusicInfo";
import { PlayerExtraButtons } from "./PlayerExtraButtons";
import { PlayerMainButtons } from "./PlayerMainButtons";
import { PlayerProgressBar } from "./PlayerProgressBar";
import { PlayerVolume } from "./PlayerVolume";

const { colors, fontSizes, fontWeight } = variables;

const PlayerContainer = styled.footer`
  grid-area: player;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  background-color: ${colors.primaryColorDarker};
`;

const PlayerMainContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const PlayerTime = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeight.sm};
`;

export function Player() {
  return (
    <PlayerContainer>
      <MusicInfo song={songPlaying} />
      <PlayerMainContainer>
        <PlayerMainButtons />
        <PlayerTime>00:00</PlayerTime>
        <PlayerProgressBar progress={25} />
        <PlayerTime>3:00</PlayerTime>
      </PlayerMainContainer>
      <PlayerExtraButtons />
      <PlayerVolume progress={100} />
    </PlayerContainer>
  );
}
