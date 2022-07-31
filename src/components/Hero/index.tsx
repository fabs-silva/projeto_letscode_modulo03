import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  height: 60%;
  min-height: 350px;
  flex-direction: column;
`;

export function Hero(props: {
  children: JSX.Element | JSX.Element[];
  heroImage: string;
  bgPositionX: string;
  bgPositionY: string;
}) {
  return (
    <HeroContainer
      style={{
        background: `url(${props.heroImage}) no-repeat ${props.bgPositionX} ${props.bgPositionY}`,
      }}
    >
      {props.children}
    </HeroContainer>
  );
}
