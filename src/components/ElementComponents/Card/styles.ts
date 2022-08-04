import styled from "styled-components";
import theme from "../../../styles/theme";
const { fonts } = theme;

export const CardItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  & img {
    width: 170px;
    height: 170px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  & h2 {
    font-size: ${fonts.fontSizes.sm};
    max-width: 170px;
    margin-bottom: 0.25rem;
  }

  & p {
    font-size: ${fonts.fontSizes.sm};
    font-weight: ${fonts.fontWeight.xs};
    max-width: 170px;
  }
`;
