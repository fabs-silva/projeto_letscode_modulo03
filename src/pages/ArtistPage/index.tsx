import styled from "styled-components";
import { artist } from "../../assets/artist";
import { CardCarousel } from "../../components/CardsCarousel";
import { MainArea } from "../../components/MainArea";
import { variables } from "../../styles/variables";
import { HeroArtistPage } from "./Hero";
const { colors, fontSizes, fonts } = variables;

const ArtistPageContainer = styled.section`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: ${fontSizes.sm};
`;

const ArtistPageLastRelease = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
  }

  & p {
  }
`;

type FormFieldsetProps = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  setValue: (value: string) => void;
};

export function Artist() {
  return (
    <MainArea style={{ paddingBottom: "3rem" }}>
      <ArtistPageContainer>
        <HeroArtistPage artist={artist}></HeroArtistPage>
        <ArtistPageLastRelease />
        <CardCarousel
          title="Albums and Singles"
          link="#"
          seeMore={true}
          cardsList={[]}
        />
        <CardCarousel
          title="Playlists"
          link="#"
          seeMore={true}
          cardsList={[]}
        />
        <CardCarousel
          title="Related Artists"
          link="#"
          seeMore={true}
          cardsList={[]}
        />
      </ArtistPageContainer>
    </MainArea>
  );
}
