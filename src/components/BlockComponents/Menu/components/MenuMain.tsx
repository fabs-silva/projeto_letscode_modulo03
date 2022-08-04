import { FiHome, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MenuGroup, MenuItem } from '../styles';

export function MenuMain() {
  return (
    <MenuGroup>
      <MenuItem>
        <Link to="/home">
          <FiHome />
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/search">
          <FiSearch />
          Find Music
        </Link>
      </MenuItem>
    </MenuGroup>
  );
}
