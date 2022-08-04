import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fonts } = theme;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  z-index: 999;
  background-color: ${colors.dark.primaryDarker};
`;

const HeaderSearchContainer = styled.div`
  position: relative;

  & input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    width: 17rem;
    background: ${colors.alpha.white};
    padding-left: 2rem;
    color: ${colors.main.white};
    font-size: ${fonts.fontSizes.sm};
  }

  & svg {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    color: ${colors.light.gray};
    font-size: ${fonts.fontSizes.md};
  }

  & input::placeholder {
    font-family: ${fonts.mainFont};
    font-size: ${fonts.fontSizes.sm};
    color: ${colors.main.white};
  }

  & input:focus-visible {
    border-color: ${colors.light.accent};
  }
`;

const HeaderProfileContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;

  & p {
    font-size: ${fonts.fontSizes.sm};
    font-weight: ${fonts.fontWeight.xs};
  }

  & span {
    font-weight: ${fonts.fontWeight.md};
  }
`;

const HeaderDropdownContainer = styled.a`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;

  & img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid ${colors.main.secondary};
  }
`;

const HeaderDropdownNav = styled.nav`
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  position: absolute;
  background-color: ${colors.main.primary};
  font-size: ${fonts.fontSizes.sm};
  padding: 1rem;
  top: 35px;
  right: 5px;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 10px ${colors.alpha.black};

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & ul {
    list-style: none;
  }

  & li {
    width: 7rem;
    padding: 0.75rem 0;
    cursor: pointer;
    text-align: center;

    &:last-of-type {
      border-top: 1px solid ${colors.light.primary};
    }
  }
`;

export {
  HeaderContainer,
  HeaderSearchContainer,
  HeaderProfileContainer,
  HeaderDropdownContainer,
  HeaderDropdownNav,
};
