import styled from 'styled-components';
import { variables } from '../../styles/variables';
import { HeaderProfile } from './HeaderProfile';
import { HeaderSearch } from './HeaderSearch';

const { colors, fontSizes, fontWeight } = variables;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 50px;
`;

const HeaderLogo = styled.p`
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.md};
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>ESCFy</HeaderLogo>
      <HeaderSearch />
      <HeaderProfile />
    </HeaderContainer>
  );
}
