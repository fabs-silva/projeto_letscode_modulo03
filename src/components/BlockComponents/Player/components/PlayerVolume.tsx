import { TbVolume, TbVolume3 } from "react-icons/tb";
import { usePlayer } from "../../../../hooks/usePlayer";
import {
  PlayerVolumeBar,
  PlayerVolumeContainer,
  ToggleButton,
} from "../styles";

export function PlayerVolume(props: { songRef: any }) {
  const { videoControl, toggleIsMuted, handleVolume } = usePlayer(
    props.songRef
  );

  return (
    <PlayerVolumeContainer>
      <ToggleButton onClick={toggleIsMuted}>
        {videoControl.isMuted ? <TbVolume3 /> : <TbVolume />}
      </ToggleButton>
      <PlayerVolumeBar type="range" min="0" max="100" onChange={handleVolume} />
    </PlayerVolumeContainer>
  );
}
