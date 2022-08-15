import { MdAddCircleOutline } from 'react-icons/md';
import { RiHeartPulseLine } from 'react-icons/ri';
import { MenuFeatPlaylists } from './components/MenuFeatPlaylists';
import { MenuMain } from './components/MenuMain';
import { MenuYourMusic } from './components/MenuYourMusic';
import { MenuButton, MenuContainer, MenuLogo } from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <MenuLogo>
        <RiHeartPulseLine />
        ESCFy
      </MenuLogo>
      <MenuMain />
      <MenuYourMusic />
      <MenuFeatPlaylists />
      <MenuButton>
        <MdAddCircleOutline />
        New Playlist
      </MenuButton>
    </MenuContainer>
  );
}
