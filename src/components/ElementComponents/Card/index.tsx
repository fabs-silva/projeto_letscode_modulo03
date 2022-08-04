import { Link } from "react-router-dom";
import { ICard } from "../../../types";
import { CardItemContainer } from "./styles";

export function CardItem(props: { card: ICard }) {
  return (
    <CardItemContainer key={props.card.id}>
      <Link to={props.card.link}>
        <img src={props.card.image} alt={props.card.title} />
        <h2>{props.card.title}</h2>
        <p>
          {props.card.subtitle}
          {props.card.type ? (
            <span style={{ textTransform: "capitalize" }}>
              {" "}
              - {props.card.type}
            </span>
          ) : null}
        </p>
      </Link>
    </CardItemContainer>
  );
}
