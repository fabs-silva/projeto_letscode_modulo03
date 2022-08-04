import { useRef, useState } from 'react';
import { IProfile } from '../../../../types';
import { HeaderDropdownContainer, HeaderDropdownNav } from '../styles';

export function HeaderDropdown(props: { user: IProfile }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <HeaderDropdownContainer onClick={() => setIsActive(!isActive)}>
      <img
        src={props.user.image}
        alt={props.user.firstName + '-' + props.user.lastName}
      />
      <HeaderDropdownNav
        ref={dropdownRef}
        className={isActive ? 'active' : 'inactive'}
      >
        <ul>
          <li onClick={() => {}}>Profile</li>
          <li onClick={() => {}}>Logout</li>
        </ul>
      </HeaderDropdownNav>
    </HeaderDropdownContainer>
  );
}
