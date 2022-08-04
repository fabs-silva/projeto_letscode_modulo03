import { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { TbVolume, TbVolume3 } from 'react-icons/tb';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const { colors, fontSizes } = variables;

export function PlayerVolume(props: { progress: number }) {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <PlayerVolumeContainer>
      {isMuted ? <TbVolume3 /> : <TbVolume />}
      <PlayerVolumeBar>
        <FaRegCircle />
        <span style={{ width: `${props.progress}%` }} />
      </PlayerVolumeBar>
    </PlayerVolumeContainer>
  );
}
