import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { TbVolume, TbVolume3 } from "react-icons/tb";
import styled from "styled-components";
import { variables } from "../../../styles/variables";

const { colors, fontSizes } = variables;

const PlayerVolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & svg:first-child {
    font-size: ${fontSizes.lg};
  }
`;

const PlayerVolumeBar = styled.div`
  width: 4rem;
  height: 0.3rem;
  border-radius: 0.5rem;
  background-color: ${colors.accentColorLight};
  overflow: hidden;

  & span {
    height: 100%;
    background-color: ${colors.accentColorLight};
  }

  & svg {
    display: block;
    position: absolute;
    z-index: 1;
    margin-top: -5px;
    margin-left: -10px;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.18rem solid ${colors.accentColorLight};
    border-radius: 100%;
    background-color: ${colors.accentColor};
    fill: ${colors.accentColor};
    box-shadow: 0 1px 6px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

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
