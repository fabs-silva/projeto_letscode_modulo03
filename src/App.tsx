import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import { MainArea } from './components/MainArea';
import { Menu } from './components/Menu';
import { Player } from './components/Player';
import { GlobalStyle } from './styles/globalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <Menu />
          <MainArea />
        </MainContainer>
        <Player />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
