import { useState } from 'react';
import {
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const { fontSizes } = variables;

const PlayerMainButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.xl};

  & svg {
    cursor: pointer;
  }
`;

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
