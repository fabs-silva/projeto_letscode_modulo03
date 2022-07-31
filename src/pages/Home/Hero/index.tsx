import styled from "styled-components";
import heroImage from "../../../assets/hero-image.jpg";
import { Hero } from "../../../components/Hero";
import { variables } from "../../../styles/variables";

const { colors, fontSizes, fontWeight } = variables;

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
    font-size: ${fontSizes.xl};
    color: ${colors.accentColorLight};
    margin-bottom: 0.25rem;
  }

  & h3 {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
    margin-bottom: 1.25rem;
  }

  & button {
    padding: 0.5rem 1rem;
    background-color: ${colors.accentColor};
    color: ${colors.mainWhite};
    text-transform: uppercase;
  }
`;

export function HeroHome() {
  console.log(heroImage);
  return (
    <Hero heroImage={heroImage} bgPositionX="10%" bgPositionY="30%">
      <HeroInfo>
        <h1>Tik Tok's hit is here!</h1>
        <h3>
          Listen to Rosa Linn's "Snap", one of the most played songs of 2022!
        </h3>
        <button>Listen</button>
      </HeroInfo>
    </Hero>
  );
}
