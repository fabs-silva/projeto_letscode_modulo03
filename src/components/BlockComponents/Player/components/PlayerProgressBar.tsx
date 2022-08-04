import { FaRegCircle } from 'react-icons/fa';
import { PlayerProgressBarContainer } from '../styles';

export function PlayerProgressBar(props: { progress: number }) {
  return (
    <PlayerProgressBarContainer>
      <FaRegCircle />
      <span style={{ width: `${props.progress}%` }} />
    </PlayerProgressBarContainer>
  );
}
