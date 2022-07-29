import { FaRegCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const { colors } = variables;

const PlayerProgressBarContainer = styled.div`
  width: 30rem;
  height: 0.3rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.accentColorLight};
  overflow: hidden;

  & span {
    height: 100%;
    background-color: ${colors.accentColorLight};
  }

  & svg {
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: -5px;
    margin-left: -10px;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.18rem solid ${colors.accentColorLight};
    border-radius: 100%;
    background-color: ${colors.accentColor};
    fill: ${colors.accentColor};
    box-shadow: 0 1px 6px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export function PlayerProgressBar(props: { progress: number }) {
  return (
    <PlayerProgressBarContainer>
      <FaRegCircle />
      <span style={{ width: `${props.progress}%` }} />
    </PlayerProgressBarContainer>
  );
}
