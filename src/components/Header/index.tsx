import styled from "styled-components";
import { variables } from "../../styles/variables";
import { IProfile } from "../../types";
import { HeaderProfile } from "./HeaderProfile";
import { HeaderSearch } from "./HeaderSearch";

const { colors } = variables;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  z-index: 999;
  background-color: ${colors.primaryColorDarker};
`;

export function Header(props: { profile: IProfile; deleteToken: () => void }) {
  return (
    <HeaderContainer>
      <HeaderSearch />
      <HeaderProfile user={props.profile} deleteToken={props.deleteToken} />
    </HeaderContainer>
  );
}
