import styled from 'styled-components';
import heroImage from '../../../assets/hero-image.jpg';
import { variables } from '../../../styles/variables';
import { Header } from '../../Header';

const { colors, fontSizes, fontWeight } = variables;

const HeroContainer = styled.section`
  display: flex;
  background: url(${heroImage}) no-repeat fixed center left;
  width: 100%;
  height: 350px;
  flex-direction: column;
`;

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

export function Hero() {
  return (
    <HeroContainer>
      <Header />
      <HeroInfo>
        <h1>Tik Tok's hit is here!</h1>
        <h3>
          Listen to Rosa Linn's "Snap", one of the most played songs of 2022!
        </h3>
        <button>Listen</button>
      </HeroInfo>
    </HeroContainer>
  );
}
