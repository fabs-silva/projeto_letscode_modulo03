import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { createContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { profile } from './assets/mockups/profile';
import { RoutesComponent } from './RoutesComponent';
import { GlobalStyle } from './styles/globalStyles';
import { IProfile } from './types';

export const UserContext = createContext({} as IProfile);

export function App() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);

  return (
    <UserContext.Provider value={profile}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesComponent />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
