import { cardsFavoriteArtists, cardsNewMusic } from "../../assets/cards/cards";
import { CardCarousel } from "../../components/CardsCarousel";
import { MainArea } from "../../components/MainArea";
import { HeroHome } from "./Hero";

export function Home() {
  return (
    <MainArea
      style={{ gridRow: "1 / 3", gridColumn: "2 / 4", paddingBottom: "3rem" }}
    >
      <HeroHome />
      <CardCarousel
        title="Your Favorite Artists"
        link="#"
        cardsList={cardsFavoriteArtists}
      />
      <CardCarousel
        title="New Music Friday"
        link="#"
        cardsList={cardsNewMusic}
      />
    </MainArea>
  );
}
