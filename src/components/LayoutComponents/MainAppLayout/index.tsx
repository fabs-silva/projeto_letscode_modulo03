import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../App';
import { Header } from '../../BlockComponents/Header';
import { Menu } from '../../BlockComponents/Menu';
import { Player } from '../../BlockComponents/Player';

const MainAppContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    'menu header' 70px
    'menu content' auto
    'player player' 70px
    / 200px 1fr;
`;

export function MainAppLayout() {
  const user = useContext(UserContext);

  return (
    <MainAppContainer>
      <Menu />
      <Header user={user} />
      <Outlet />
      <Player />
    </MainAppContainer>
  );
}
