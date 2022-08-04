import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { IProfile } from '../../types';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Player } from '../Player';

const AppLayoutContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    'menu header' 70px
    'menu content' auto
    'player player' 70px
    / 200px 1fr;
`;

export function AppLayout(props: {
  getData: IProfile;
  deleteToken: () => void;
}) {
  return (
    <AppLayoutContainer>
      <Menu />
      <Header profile={props.getData} deleteToken={props.deleteToken} />
      <Outlet />
      <Player />
    </AppLayoutContainer>
  );
}
