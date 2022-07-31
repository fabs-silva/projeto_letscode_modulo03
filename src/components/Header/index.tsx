import styled from "styled-components";
import { variables } from "../../styles/variables";
import { HeaderProfile } from "./HeaderProfile";
import { HeaderSearch } from "./HeaderSearch";
import { profile } from "../../assets/profile";

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
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderSearch />
      <HeaderProfile user={profile} />
    </HeaderContainer>
  );
}
