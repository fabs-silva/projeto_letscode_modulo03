import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/auth";
import { IProfile } from "../../../../types";
import { HeaderDropdownContainer, HeaderDropdownNav } from "../styles";

export function HeaderDropdown(props: { user: IProfile }) {
  let navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();

    navigate("/", { replace: true });
    logout();
  };

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
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </HeaderDropdownNav>
    </HeaderDropdownContainer>
  );
}
