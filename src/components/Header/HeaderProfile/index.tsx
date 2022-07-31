import { Link } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { IProfile } from "../../../types";

const { colors, fontSizes, fontWeight } = variables;

const HeaderProfileContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;

  & a {
    display: flex;
    align-items: center;
  }

  & img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid ${colors.secondaryColor};
  }

  & p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
  }

  & span {
    font-weight: ${fontWeight.md};
  }
`;

export function HeaderProfile(props: { user: IProfile }) {
  return (
    <HeaderProfileContainer>
      <Link to="#">
        <img
          src={props.user.image}
          alt={props.user.firstName + "-" + props.user.lastName}
        />
      </Link>
      <p>
        Welcome Back, <span>{props.user.firstName}</span>
      </p>
    </HeaderProfileContainer>
  );
}
