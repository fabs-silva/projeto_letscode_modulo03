import { useEffect, useState } from "react";
import { ITrack } from "../../../../types";
import { PlayerProgressBarContainer } from "../styles";

export function PlayerProgressBar(props: { song: ITrack; songRef: any }) {
  const [songPercentage, setSongPercentage] = useState<number>(0);

  useEffect(() => {}, [songPercentage]);

  return (
    <PlayerProgressBarContainer
      type="range"
      min="0"
      max="100"
      value={songPercentage}
      onChange={(e) => setSongPercentage(parseFloat(e.target.value))}
    />
  );
}
