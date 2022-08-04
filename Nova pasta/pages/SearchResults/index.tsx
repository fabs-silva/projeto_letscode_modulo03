import { cardsSearchArtist } from "../../assets/cards/cards";
import { CardCarousel } from "../../components/CardsCarousel";
import { MainArea } from "../../components/MainArea";

export function SearchResults(props: { searchKeyword: string }) {
  return (
    <MainArea style={{ padding: "3rem 0" }}>
      <CardCarousel
        title={`Search results for "${props.searchKeyword}"`}
        seeMore={false}
        link="#"
        cardsList={cardsSearchArtist}
      />
    </MainArea>
  );
}
