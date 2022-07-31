import styled from "styled-components";

const MainAreaContainer = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  overflow-y: auto;
`;

export function MainArea(props: {
  style: {};
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <MainAreaContainer style={props.style}>{props.children}</MainAreaContainer>
  );
}
