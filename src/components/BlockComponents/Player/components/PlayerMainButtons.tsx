import { useState } from 'react';
import {
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';
import { PlayerMainButtonsContainer } from '../styles';

export function PlayerMainButtons() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);

  return (
    <PlayerMainButtonsContainer>
      {hasPrevious ? (
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
      )}
      {playing ? (
        <TbPlayerPause
          onClick={() => {
            setPlaying(!playing);
          }}
        />
      ) : (
        <TbPlayerPlay
          onClick={() => {
            setPlaying(!playing);
          }}
        />
      )}
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
      )}
    </PlayerMainButtonsContainer>
  );
}
