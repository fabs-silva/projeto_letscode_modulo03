import { Link } from "react-router-dom";
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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr;
  justify-content: center;
  gap: 2rem;
`;

export function CardCarousel(props: {
  title: string;
  link: string;
  seeMore: boolean;
  cardsList: ICard[];
}) {
  return (
    <CardCarouselContainer>
      <CardTitleContainer>
        <h1>{props.title}</h1>
        {props.seeMore ? <Link to={props.link}>See More</Link> : null}
      </CardTitleContainer>
      <CardCarouselItems>
        {props.cardsList.map((card) => {
          return <CardItem key={card.id} card={card} />;
        })}
      </CardCarouselItems>
    </CardCarouselContainer>
  );
}
