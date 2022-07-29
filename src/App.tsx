import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MainArea } from './components/MainArea';
import { Menu } from './components/Menu';
import { Player } from './components/Player';
import { GlobalStyle } from './styles/globalStyles';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    'menu content' auto
    'player player' 70px
    / 200px 1fr;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        <MainArea />
        <Player />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
