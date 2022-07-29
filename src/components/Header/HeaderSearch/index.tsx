import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const { colors, fonts, fontSizes } = variables;

const HeaderSearchContainer = styled.div`
  position: relative;

  & input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    width: 17rem;
    background: ${colors.whiteAlpha};
    padding-left: 2rem;
    color: ${colors.mainWhite};
    font-size: ${fontSizes.sm};
  }

  & svg {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    color: ${colors.lightGray};
    font-size: ${fontSizes.md};
  }

  & input::placeholder {
    font-family: ${fonts.jost};
    font-size: ${fontSizes.sm};
    color: ${colors.mainWhite};
  }

  & input:focus-visible {
    border-color: ${colors.accentColorLight};
  }
`;

export function HeaderSearch() {
  return (
    <HeaderSearchContainer>
      <FiSearch />
      <input type="text" placeholder="Find your favorite music here" />
    </HeaderSearchContainer>
  );
}
