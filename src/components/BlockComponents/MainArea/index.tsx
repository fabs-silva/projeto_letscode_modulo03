import { CSSProperties } from "react";
import styled from "styled-components";

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
  style: CSSProperties;
};
export function MainArea({ children, style, ...rest }: MainAreaProps) {
  return <MainAreaContainer>{children}</MainAreaContainer>;
}
