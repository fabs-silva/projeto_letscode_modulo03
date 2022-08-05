import { usePlayer } from '../../../../hooks/usePlayer';
import { ISongPlaying } from '../../../../types';
import { PlayerProgressBarContainer } from '../styles';

export function PlayerProgressBar(props: { song: ISongPlaying; songRef: any }) {
  const { videoControl, updateSongProgress, handleSeeking } = usePlayer(
    props.songRef
  );

  return (
    <PlayerProgressBarContainer
      type="range"
      min="0"
      max={props.song.length}
      value={videoControl.songPercentage}
      onChange={handleSeeking}
    />
  );
}
