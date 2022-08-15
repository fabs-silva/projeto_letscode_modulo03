import styled from "styled-components";
import theme from "../../styles/theme";

const { colors, fonts } = theme;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: 30%;
  padding-left: 5rem;
  padding-bottom: 4rem;

  & h1 {
    font-size: ${fonts.fontSizes.xl};
    color: ${colors.light.accent};
    margin-bottom: 0.25rem;
  }

  & h3 {
    font-size: ${fonts.fontSizes.sm};
    font-weight: ${fonts.fontWeight.xs};
    margin-bottom: 1.25rem;
  }

  & button {
    padding: 0.5rem 1rem;
    background-color: ${colors.main.accent};
    color: ${colors.main.white};
    text-transform: uppercase;
  }
`;

export { HeroInfo };
