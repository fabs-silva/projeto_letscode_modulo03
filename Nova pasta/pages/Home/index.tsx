import { cardsFavoriteArtists, cardsNewMusic } from "../../assets/cards/cards";
import { CardCarousel } from "../../components/CardsCarousel";
import { MainArea } from "../../components/MainArea";
import { HeroHome } from "./Hero";

export function Home() {
  return (
    <MainArea style={{ paddingBottom: "3rem" }}>
      <HeroHome />
      <CardCarousel
        title="Your Favorite Artists"
        link="#"
        seeMore={true}
        cardsList={cardsFavoriteArtists}
      />
      <CardCarousel
        title="New Music Friday"
        link="#"
        seeMore={true}
        cardsList={cardsNewMusic}
      />
    </MainArea>
  );
}
