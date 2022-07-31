import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { IMusicItem } from "../../../types";

const { colors, fontSizes, fontWeight } = variables;

const MusicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1 / 2;
  justify-self: center;
  position: sticky;
  top: 0;

  & img {
    width: 270px;
    margin-bottom: 1.5rem;
  }

  & h1 {
    font-size: ${fontSizes.lg};
    font-weight: ${fontWeight.lg};
    margin-bottom: 0.2rem;
    color: ${colors.accentColorLight};
  }

  & h2 {
    font-size: calc(${fontSizes.lg} - 0.1rem);
    font-weight: ${fontWeight.sm};
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
  }
`;

export function MusicInfo(props: { musicItem: IMusicItem }) {
  return (
    <MusicInfoContainer>
      <img src={props.musicItem.image} alt="Album image" />
      <h1>{props.musicItem.title} </h1>
      <h2>
        {props.musicItem.artistsOrOwner.map((arOrOw: string) => (
          <span>{arOrOw}</span>
        ))}
      </h2>
      {props.musicItem.type === "track" || props.musicItem.type === "album" ? (
        <p>
          {props.musicItem.year} - {props.musicItem.label}
        </p>
      ) : (
        <p>{props.musicItem.numberItems} songs</p>
      )}
    </MusicInfoContainer>
  );
}
