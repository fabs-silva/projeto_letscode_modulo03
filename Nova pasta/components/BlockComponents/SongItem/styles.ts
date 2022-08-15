import styled from "styled-components";
import theme from "../../../styles/theme";

const { colors, fonts } = theme;

const SongItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2rem 1fr 4rem 5rem;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const SongItemTrack = styled.p`
  justify-self: center;
  color: ${colors.light.secondary};
`;

const SongItemTitle = styled.h2`
  font-size: ${fonts.fontSizes.md};
  font-weight: ${fonts.fontWeight.lg};
  cursor: pointer;
`;

const SongItemArtists = styled.div`
  & span {
    font-size: ${fonts.fontSizes.md};
    font-weight: ${fonts.fontWeight.xs};
  }
`;

const SongItemButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & svg {
    font-size: ${fonts.fontSizes.xl};
    cursor: pointer;
  }
`;

const SongItemLength = styled.p`
  justify-self: center;
`;

export {
  SongItemContainer,
  SongItemTrack,
  SongItemTitle,
  SongItemArtists,
  SongItemButtons,
  SongItemLength,
};
