import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { usePlayer } from "../../../../hooks/usePlayer";
import { PlayerMainButtonsContainer, ToggleButton } from "../styles";

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
      <ToggleButton onClick={toggleVideoPlay}>
        {videoControl.playing ? <TbPlayerPause /> : <TbPlayerPlay />}
      </ToggleButton>
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
