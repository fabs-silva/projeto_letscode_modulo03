import styled from 'styled-components';
import { HeaderProfile } from './HeaderProfile';
import { HeaderSearch } from './HeaderSearch';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem 0.5rem;
  width: 100%;
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderSearch />
      <HeaderProfile name="Sasha" />
    </HeaderContainer>
  );
}
