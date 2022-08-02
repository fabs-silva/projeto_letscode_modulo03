import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { LoginLayout } from './components/LoginLayout';
import useToken from './hooks/useToken';
import { Album } from './pages/Album';
import { Artist } from './pages/ArtistPage';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Playlist } from './pages/Playlist';
import { SearchResults } from './pages/SearchResults';
import { SignUp } from './pages/SignUp';
import { GlobalStyle } from './styles/globalStyles';
import { IProfile } from './types';

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
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLayout />}>
            <Route
              path="login"
              element={<Login setGetData={setGetData} setToken={setToken} />}
            />
            <Route
              index
              element={<Login setGetData={setGetData} setToken={setToken} />}
            />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route
            path="home"
            element={<AppLayout getData={getData} deleteToken={deleteToken} />}
          >
            <Route index element={<Home />} />
            <Route path="album" element={<Album />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="artist" element={<Artist />} />
            <Route
              path="search-results"
              element={<SearchResults searchKeyword={'Kaliopi'} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
