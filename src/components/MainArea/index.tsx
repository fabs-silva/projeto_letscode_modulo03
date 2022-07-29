import styled from 'styled-components';
import { Hero } from './Hero';

const MainAreaContainer = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow-y: auto;
`;

export function MainArea() {
  return (
    <MainAreaContainer>
      <Hero /> Main Area
    </MainAreaContainer>
  );
}
