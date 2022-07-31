import styled from "styled-components";
import { variables } from "../../styles/variables";
import { ICard } from "../../types";
import { CardItem } from "./CardItem";

const { colors, fontSizes } = variables;

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
    font-size: ${fontSizes.xl};
    color: ${colors.secondaryColorLight};
  }

  & a {
    font-size: ${fontSizes.sm};
    text-transform: uppercase;
  }
`;

const CardCarouselItems = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  & :last-child {
    align-self: flex-start;
  }
`;

export function CardCarousel(props: {
  title: string;
  link: string;
  cardsList: ICard[];
}) {
  return (
    <CardCarouselContainer>
      <CardTitleContainer>
        <h1>{props.title}</h1>
      </CardTitleContainer>
      <CardCarouselItems>
        {props.cardsList.map((card) => {
          return <CardItem key={card.id} card={card} />;
        })}
      </CardCarouselItems>
    </CardCarouselContainer>
  );
}
