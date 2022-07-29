import styled from 'styled-components';

const MainAreaContainer = styled.main`
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
`;

export function MainArea() {
  return <MainAreaContainer>MainArea</MainAreaContainer>;
}
