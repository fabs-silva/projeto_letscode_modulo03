import { FiMusic } from 'react-icons/fi';
import { MdFavorite } from 'react-icons/md';
import { TbPlaylist } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { MenuGroup, MenuGroupTitle, MenuItem } from '../styles';

export function MenuYourMusic() {
  return (
    <MenuGroup>
      <MenuGroupTitle>Your Music</MenuGroupTitle>
      <MenuItem>
        <Link to="/recent-played">
          <FiMusic />
          Recent Played
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="favorites">
          <MdFavorite />
          Your Favorites
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="playlists">
          <TbPlaylist />
          Your Playlists
        </Link>
      </MenuItem>
    </MenuGroup>
  );
}
