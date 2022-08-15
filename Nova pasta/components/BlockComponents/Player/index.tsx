import { useContext } from 'react';
import { SongContext } from '../../../contexts/song';
import { usePlayer } from '../../../hooks/usePlayer';
import { convertTimeSeconds } from '../../../utils/convertTime';
import { PlayerExtraButtons } from './components/PlayerExtraButtons';
import { PlayerMainButtons } from './components/PlayerMainButtons';
import { PlayerMusicInfo } from './components/PlayerMusicInfo';
import { PlayerProgressBar } from './components/PlayerProgressBar';
import { PlayerVolume } from './components/PlayerVolume';
import { PlayerContainer, PlayerMainContainer, PlayerTime } from './styles';

export function Player() {
  const { $songPlayer, songPlaying } = useContext(SongContext);
  const { videoControl, songProgress, updateSongProgress } =
    usePlayer($songPlayer);

  return (
    <PlayerContainer>
      <PlayerMusicInfo song={songPlaying!} />
      <PlayerMainContainer>
        <PlayerMainButtons songRef={$songPlayer} />
        <PlayerTime>{convertTimeSeconds(songProgress)}</PlayerTime>
        {songPlaying && (
          <audio
            src={songPlaying!.song_url}
            ref={$songPlayer}
            onTimeUpdate={updateSongProgress}
          />
        )}
        <PlayerProgressBar song={songPlaying!} songRef={$songPlayer} />
        <PlayerTime>
          {convertTimeSeconds(isNaN(videoControl.previewLength) ? 0 : 30)}
        </PlayerTime>
      </PlayerMainContainer>
      <PlayerExtraButtons />
      <PlayerVolume songRef={$songPlayer} />
    </PlayerContainer>
  );
}
