import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
import { GlobalStyle } from './styles/globalStyles';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesComponent />
    </BrowserRouter>
  );
}
