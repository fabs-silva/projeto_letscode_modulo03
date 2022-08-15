import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-image.jpg';
import { cardsNewMusic } from '../../assets/mocks/cardsNewMusic';
import { CardCarousel } from '../../components/BlockComponents/CardCarousel';
import { Hero } from '../../components/BlockComponents/Hero';
import { MainArea } from '../../components/BlockComponents/MainArea';
import { HeroInfo } from './styles';

export function Home() {
  return (
    <MainArea style={{ paddingBottom: '3rem' }}>
      <Hero
        heroImage={heroImage}
        bgPositionX="10%"
        bgPositionY="30%"
        isImageDark={false}
      >
        <HeroInfo>
          <h1>Tik Tok's hit is here!</h1>
          <h3>
            Listen to Rosa Linn's "Snap", one of the most played songs of 2022!
          </h3>
          <button>
            <Link to="/album/4Cv9qCS1q3FDyyRFHGyc1g">Listen</Link>
          </button>
        </HeroInfo>
      </Hero>
      <CardCarousel
        title="New Music Friday"
        link="#"
        seeMore={true}
        cardsList={cardsNewMusic}
        cardItemStyle={{ height: '260px', overflow: 'hidden' }}
      />
    </MainArea>
  );
}
