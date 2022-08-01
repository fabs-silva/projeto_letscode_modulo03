import { FiFacebook, FiHome, FiMusic, FiSearch } from "react-icons/fi";
import { GiBananaPeeled, GiCleopatra, GiSmallFire } from "react-icons/gi";
import { MdAddCircleOutline, MdFavorite } from "react-icons/md";
import { RiHeartPulseLine } from "react-icons/ri";
import { TbPlaylist } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  MenuButton,
  MenuContainer,
  MenuGroup,
  MenuGroupTitle,
  MenuItem,
  MenuLogo,
} from "./styles";

function MenuGroupMain() {
  return (
    <MenuGroup>
      <MenuItem>
        <Link to="/home">
          <FiHome />
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <FiSearch />
          Find Music
        </Link>
      </MenuItem>
    </MenuGroup>
  );
}

function MenuGroupYourMusic() {
  return (
    <MenuGroup>
      <MenuGroupTitle>Your Music</MenuGroupTitle>
      <MenuItem>
        <Link to="#">
          <FiMusic />
          Recent Played
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <MdFavorite />
          Your Favorites
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <TbPlaylist />
          Your Playlists
        </Link>
      </MenuItem>
    </MenuGroup>
  );
}

function MenuGroupPlaylists() {
  return (
    <MenuGroup>
      <MenuGroupTitle>Featured Playlists</MenuGroupTitle>
      <MenuItem>
        <Link to="#">
          <GiCleopatra />
          Like Cleopatra
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <FiFacebook />
          Social Media Hits
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <GiBananaPeeled />
          Yum-Yum-Yum
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <GiSmallFire />
          I'm On Fire
        </Link>
      </MenuItem>
    </MenuGroup>
  );
}

export function Menu() {
  return (
    <MenuContainer>
      <MenuLogo>
        <RiHeartPulseLine />
        ESCFy
      </MenuLogo>
      <MenuGroupMain />
      <MenuGroupYourMusic />
      <MenuGroupPlaylists />
      <MenuButton>
        <MdAddCircleOutline />
        New Playlist
      </MenuButton>
    </MenuContainer>
  );
}
