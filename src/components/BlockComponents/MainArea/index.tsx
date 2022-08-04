import styled from 'styled-components';

const MainAreaContainer = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  overflow-y: auto;
`;

type MainAreaProps = {
  children: React.ReactNode;
};
export function MainArea({ children, ...rest }: MainAreaProps) {
  return <MainAreaContainer>{children}</MainAreaContainer>;
}
