import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';
import { usePlayer } from '../../../../hooks/usePlayer';
import { PlayerMainButtonsContainer } from '../styles';

export function PlayerMainButtons(props: { songRef: any }) {
  const { toggleVideoPlay, videoControl } = usePlayer(props.songRef);

  return (
    <PlayerMainButtonsContainer>
      {/*  {hasPrevious ? (
        <MdSkipPrevious
          onClick={() => {
            setHasPrevious(!hasPrevious);
          }}
        />
      ) : (
        <MdOutlineSkipPrevious
          onClick={() => {
            setHasPrevious(!hasPrevious);
          }}
        />
      )} */}
      <button onClick={toggleVideoPlay}>
        {videoControl.playing ? <TbPlayerPause /> : <TbPlayerPlay />}
      </button>
      {/*{' '}
      {hasNext ? (
        <MdSkipNext
          onClick={() => {
            setHasNext(!hasNext);
          }}
        />
      ) : (
        <MdOutlineSkipNext
          onClick={() => {
            setHasNext(!hasNext);
          }}
        />
      )}{' '}
        */}
    </PlayerMainButtonsContainer>
  );
}
