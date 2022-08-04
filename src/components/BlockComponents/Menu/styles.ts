import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fonts } = theme;

const MenuContainer = styled.aside`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 200px;
  background-color: ${colors.main.primary};
  padding: 1rem;
  text-transform: uppercase;
`;

const MenuLogo = styled.p`
  font-size: ${fonts.fontSizes.lg};
  font-weight: ${fonts.fontWeight.md};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MenuGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin-bottom: 0.5rem;
`;

const MenuGroupTitle = styled.h2`
  font-size: ${fonts.fontSizes.xs};
  font-weight: ${fonts.fontWeight.md};
  margin-left: 0.5rem;
  color: ${colors.light.accent};
`;
const MenuItem = styled.li`
  display: flex;
  & a {
    display: flex;
    align-items: center;
    font-size: ${fonts.fontSizes.xs};
  }
  & svg {
    margin-right: 0.75rem;
  }
`;
const MenuButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: ${colors.main.secondary};
  border: 1px solid ${colors.main.secondary};
  font-family: ${fonts.mainFont};
  font-size: ${fonts.fontSizes.xs};
  font-weight: ${fonts.fontWeight.sm};
  text-transform: uppercase;
  margin-top: 0.5rem;

  & svg {
    margin-right: 0.5rem;
    font-size: ${fonts.fontSizes.md};
  }
`;

export {
  MenuContainer,
  MenuLogo,
  MenuGroup,
  MenuGroupTitle,
  MenuItem,
  MenuButton,
};
