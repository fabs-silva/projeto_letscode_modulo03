import styled from "styled-components";
import theme from "../../../styles/theme";

const { colors, fonts } = theme;

const AlbumInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1 / 2;
  justify-self: center;
  position: sticky;
  top: 0;

  & img {
    width: 270px;
    height: 270px;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  & h1 {
    font-size: ${fonts.fontSizes.lg};
    font-weight: ${fonts.fontWeight.lg};
    margin-bottom: 0.2rem;
    color: ${colors.light.accent};
  }

  & h2 {
    font-size: calc(${fonts.fontSizes.lg} - 0.1rem);
    font-weight: ${fonts.fontWeight.sm};
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: ${fonts.fontSizes.sm};
    font-weight: ${fonts.fontWeight.xs};
  }
`;

export { AlbumInfoContainer };
