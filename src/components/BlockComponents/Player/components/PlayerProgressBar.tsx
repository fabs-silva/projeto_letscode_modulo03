import { useEffect } from 'react';
import { usePlayer } from '../../../../hooks/usePlayer';
import { ITrack } from '../../../../types';
import { PlayerProgressBarContainer } from '../styles';

export function PlayerProgressBar(props: { song: ITrack; songRef: any }) {
  const { videoControl, songProgress, updateSongProgress } = usePlayer(
    props.songRef
  );

  useEffect(() => {
    let interval = setInterval(() => {
      updateSongProgress();
    }, 1000);

    return () => clearInterval(interval);
  }, [songProgress]);

  return (
    <PlayerProgressBarContainer
      type="range"
      min="0"
      step="1"
      max={videoControl.previewLength}
      value={songProgress}
      onChange={updateSongProgress}
    />
  );
}
