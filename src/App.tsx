import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { SongProvider } from './contexts/song';
import { RoutesComponent } from './RoutesComponent';
import { GlobalStyle } from './styles/globalStyles';

export function App() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);

  return (
    <AuthProvider>
      <SongProvider>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesComponent />
        </BrowserRouter>
      </SongProvider>
    </AuthProvider>
  );
}
