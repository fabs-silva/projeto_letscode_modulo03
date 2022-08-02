import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../App";
import { variables } from "../../../styles/variables";
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

export function HeaderProfile(props: { deleteToken: () => void }) {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <HeaderProfileContainer>
      <HeaderDropdown user={user} deleteToken={props.deleteToken} />
      <p>
        Welcome Back, <span>{user.firstName}</span>
      </p>
    </HeaderProfileContainer>
  );
}
