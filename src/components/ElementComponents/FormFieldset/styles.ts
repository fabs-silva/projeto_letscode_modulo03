import styled from "styled-components";
import theme from "../../../styles/theme";
const { colors, fonts } = theme;

export const FormFieldsetContainer = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: ${fonts.fontSizes.sm};

  & input {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: ${colors.alpha.white};
    font-size: ${fonts.fontSizes.sm};
    color: ${colors.main.white};
  }

  & input::placeholder {
    font-family: ${fonts.mainFont};
    font-size: ${fonts.fontSizes.sm};
    color: ${colors.main.white};
  }

  & input:focus-visible {
    border-color: ${colors.light.accent};
  }
`;
