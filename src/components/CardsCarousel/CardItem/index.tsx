import { Link } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { ICard } from "../../../types";

const { colors, fontSizes, fontWeight } = variables;

const CardItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  & img {
    width: 170px;
    height: 170px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  & h2 {
    font-size: ${fontSizes.sm};
    max-width: 170px;
    margin-bottom: 0.25rem;
  }

  & p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
    max-width: 170px;
  }
`;

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
