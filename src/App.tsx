import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Player } from "./components/Player";
import useToken from "./hooks/useToken";
import { Album } from "./pages/Album";
import { Artist } from "./pages/ArtistPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Playlist } from "./pages/Playlist";
import { SearchResults } from "./pages/SearchResults";
import { SignUp } from "./pages/SignUp";
import { GlobalStyle } from "./styles/globalStyles";
import { IProfile } from "./types";

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

export const UserContext = createContext({} as IProfile);

export function App() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);

  const [getData, setGetData] = useState<IProfile>({} as IProfile);

  const { token, setToken, deleteToken } = useToken();

  return (
    <UserContext.Provider value={getData}>
      <BrowserRouter>
        <GlobalStyle />
        {!token ? (
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              index
              element={<Login setGetData={setGetData} setToken={setToken} />}
            />
            <Route
              path="/login"
              element={<Login setGetData={setGetData} setToken={setToken} />}
            />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        ) : (
          <AppContainer>
            <Menu />
            <Header profile={getData} deleteToken={deleteToken} />
            <Routes>
              <Route path="/" element={<App />} />
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/album" element={<Album />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/artist" element={<Artist />} />
              <Route
                path="/search-results"
                element={<SearchResults searchKeyword={"Kaliopi"} />}
              />
            </Routes>
            <Player />
          </AppContainer>
        )}
      </BrowserRouter>
    </UserContext.Provider>
  );
}
