import { useState } from 'react';
import { TbVolume, TbVolume3 } from 'react-icons/tb';
import { ISongPlaying } from '../../../../types';
import { PlayerVolumeBar, PlayerVolumeContainer } from '../styles';

export function PlayerVolume(props: { song: ISongPlaying }) {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <PlayerVolumeContainer>
      {isMuted ? <TbVolume3 /> : <TbVolume />}
      <PlayerVolumeBar type="range" min="0" max="100" step="1" />
    </PlayerVolumeContainer>
  );
}
