import styled from "styled-components";
import theme from "../../../styles/theme";

const { colors, fonts } = theme;

const CardCarouselContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  gap: 2.5rem;
  width: 100%;
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  & h1 {
    font-size: ${fonts.fontSizes.xl};
    color: ${colors.light.secondary};
  }

  & a {
    font-size: ${fonts.fontSizes.sm};
    text-transform: uppercase;
  }
`;

const CardCarouselItems = styled.section`
  display: grid;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
`;

export { CardCarouselContainer, CardTitleContainer, CardCarouselItems };
