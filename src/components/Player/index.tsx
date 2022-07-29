import styled from 'styled-components';
import { variables } from '../../styles/variables';
import { MusicInfo } from './MusicInfo';
import { PlayerExtraButtons } from './PlayerExtraButtons';
import { PlayerMainButtons } from './PlayerMainButtons';
import { PlayerProgressBar } from './PlayerProgressBar';

const { colors } = variables;

const PlayerContainer = styled.footer`
  grid-area: player;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  background-color: ${colors.primaryColorDarker};
`;

const PlayerMainContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export function Player() {
  return (
    <PlayerContainer>
      <MusicInfo />
      <PlayerMainContainer>
        <PlayerMainButtons />
        <PlayerProgressBar progress={25} />
      </PlayerMainContainer>
      <PlayerExtraButtons />
    </PlayerContainer>
  );
}
