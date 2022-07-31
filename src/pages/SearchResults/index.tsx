import { cardsSearchArtist } from "../../assets/cards/cards";
import { CardCarousel } from "../../components/CardsCarousel";
import { MainArea } from "../../components/MainArea";

export function SearchResults(props: { searchKeyword: string }) {
  return (
    <MainArea
      style={{ gridRow: "2 / 3", gridColumn: "2 / 4", padding: "3rem 0" }}
    >
      <CardCarousel
        title={`Search results for "${props.searchKeyword}"`}
        link="#"
        cardsList={cardsSearchArtist}
      />
    </MainArea>
  );
}
