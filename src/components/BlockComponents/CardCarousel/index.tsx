import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ICard } from "../../../types";
import { CardItem } from "../../ElementComponents/Card";
import {
  CardCarouselContainer,
  CardCarouselItems,
  CardTitleContainer,
} from "./styles";

export function CardCarousel(props: {
  title: string;
  link: string;
  seeMore: boolean;
  cardsList: ICard[];
  cardItemStyle?: CSSProperties;
}) {
  return (
    <CardCarouselContainer>
      <CardTitleContainer>
        <h1>{props.title}</h1>
        {props.seeMore ? <Link to={props.link}>See More</Link> : null}
      </CardTitleContainer>
      <CardCarouselItems style={props.cardItemStyle}>
        {props.cardsList.map((card) => {
          return <CardItem key={card.id} card={card} />;
        })}
      </CardCarouselItems>
    </CardCarouselContainer>
  );
}
