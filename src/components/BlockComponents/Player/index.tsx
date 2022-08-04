import { ISongPlaying } from '../../../types';
import { convertTime } from '../../../utils/convertTime';
import { PlayerExtraButtons } from './components/PlayerExtraButtons';
import { PlayerMainButtons } from './components/PlayerMainButtons';
import { PlayerMusicInfo } from './components/PlayerMusicInfo';
import { PlayerProgressBar } from './components/PlayerProgressBar';
import { PlayerVolume } from './components/PlayerVolume';
import { PlayerContainer, PlayerMainContainer, PlayerTime } from './styles';

export const songPlaying: ISongPlaying = {
  id: '1',
  title: 'О Мамо ',
  artists: ['Сальто Назад '],
  length: 183,
  image: 'https://i1.sndcdn.com/artworks-000204978262-2re8hh-t500x500.jpg',
};

export function Player() {
  return (
    <PlayerContainer>
      <PlayerMusicInfo song={songPlaying} />
      <PlayerMainContainer>
        <PlayerMainButtons />
        <PlayerTime>00:00</PlayerTime>
        <PlayerProgressBar progress={25} />
        <PlayerTime>{convertTime(songPlaying.length)}</PlayerTime>
      </PlayerMainContainer>
      <PlayerExtraButtons />
      <PlayerVolume progress={100} />
    </PlayerContainer>
  );
}
