import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Player } from "./components/Player";
import { Album } from "./pages/Album";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { GlobalStyle } from "./styles/globalStyles";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    "menu header" 70px
    "menu content" auto
    "player player" 70px
    / 200px 1fr;
`;

export function convertTime(timeInSeconds: number) {
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  const secondsLeft = timeInSeconds % 60;

  return `${timeInMinutes}:${
    secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  }`;
}

export function App() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route
            path="/search-results"
            element={<SearchResults searchKeyword={"Kaliopi"} />}
          />
        </Routes>
        <Player />
      </AppContainer>
    </BrowserRouter>
  );
}
