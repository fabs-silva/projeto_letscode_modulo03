import styled from 'styled-components';
import { variables } from '../../styles/variables';

const { colors, fonts, fontWeight, fontSizes } = variables;

const MenuContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 200px;
  background-color: ${colors.primaryColor};
  padding: 1rem;
  text-transform: uppercase;
`;

const MenuGroup = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuGroupTitle = styled.h2`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeight.md};
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  color: ${colors.accentColorLight};
`;
const MenuItem = styled.li`
  display: flex;
  padding: 0.3rem 0;
  & a {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.xs};
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
  color: ${colors.secondaryColor};
  border: 1px solid ${colors.secondaryColor};
  font-family: ${fonts.jost};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeight.md};
  text-transform: uppercase;
  margin-top: 0.5rem;

  & svg {
    margin-right: 0.5rem;
    font-size: ${fontSizes.md};
  }
`;

export { MenuContainer, MenuGroup, MenuGroupTitle, MenuItem, MenuButton };
