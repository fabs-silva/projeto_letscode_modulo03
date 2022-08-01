import styled from 'styled-components';
import { artist } from '../../../assets/artist';
import { Hero } from '../../../components/Hero';
import { variables } from '../../../styles/variables';
import { IArtist } from '../../../types';

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
    font-size: calc(${fontSizes.xl} * 3);
    color: ${colors.accentColorLight};
    margin-bottom: 0.25rem;
  }

  & h3 {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
    margin-bottom: 1.25rem;
  }
`;

const HeroButtonsContainer = styled.div`
  & button {
    padding: 0.5rem 1rem;
    text-transform: uppercase;

    &:first-of-type {
      background-color: ${colors.accentColor};
      color: ${colors.mainWhite};
    }

    &:last-of-type {
      border: 1px solid ${colors.accentColor};
      color: ${colors.accentColor};
    }
  }
`;
const HeroMonthlyListeners = styled.p`
  text-transform: uppercase;
  display: flex;
  gap: 0.25rem;

  & span {
  }
`;

export function HeroArtistPage(props: { artist: IArtist }) {
  return (
    <Hero heroImage={artist.image} bgPositionX="center" bgPositionY="center">
      <HeroInfo>
        <p>
          {artist.country} {artist.flag}
        </p>
        <h1>{artist.name}</h1>
        <HeroButtonsContainer>
          <button>Play</button>
          <button>Follow</button>
        </HeroButtonsContainer>
        <HeroMonthlyListeners>
          Monthly Listeners
          <span>{artist.listeners}</span>
        </HeroMonthlyListeners>
      </HeroInfo>
    </Hero>
  );
}
