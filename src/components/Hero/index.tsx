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
  isImageDark: boolean;
}) {
  return (
    <HeroContainer
      style={{
        background: props.isImageDark
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url(${props.heroImage}) no-repeat ${props.bgPositionX} ${props.bgPositionY}`
          : `url(${props.heroImage}) no-repeat ${props.bgPositionX} ${props.bgPositionY}`,
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </HeroContainer>
  );
}
