import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { IProfile } from "../../../types";
import { HeaderDropdown } from "../HeaderDropdown";

const { colors, fontSizes, fontWeight } = variables;

const HeaderProfileContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;

  & p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
  }

  & span {
    font-weight: ${fontWeight.md};
  }
`;

export function HeaderProfile(props: {
  user: IProfile;
  deleteToken: () => void;
}) {
  return (
    <HeaderProfileContainer>
      <HeaderDropdown user={props.user} deleteToken={props.deleteToken} />
      <p>
        Welcome Back, <span>{props.user.firstName}</span>
      </p>
    </HeaderProfileContainer>
  );
}
