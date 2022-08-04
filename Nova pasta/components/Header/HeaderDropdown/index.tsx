import { useRef, useState } from "react";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import { IProfile } from "../../../types";

const { colors, fontSizes, fontWeight } = variables;

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
    border: 2px solid ${colors.secondaryColor};
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
  background-color: ${colors.primaryColor};
  font-size: ${fontSizes.sm};
  padding: 1rem;
  top: 35px;
  right: 5px;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 10px ${colors.blackAlpha};

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
      border-top: 1px solid ${colors.primaryColorLight};
    }
  }
`;

export function HeaderDropdown(props: {
  user: IProfile;
  deleteToken: () => void;
}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <HeaderDropdownContainer onClick={() => setIsActive(!isActive)}>
      <img
        src={props.user.image}
        alt={props.user.firstName + "-" + props.user.lastName}
      />
      <HeaderDropdownNav
        ref={dropdownRef}
        className={isActive ? "active" : "inactive"}
      >
        <ul>
          <li onClick={() => {}}>Profile</li>
          <li onClick={props.deleteToken}>Logout</li>
        </ul>
      </HeaderDropdownNav>
    </HeaderDropdownContainer>
  );
}
