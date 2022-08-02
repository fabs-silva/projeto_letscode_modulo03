import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

const LoginLayoutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bg}) fixed no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export function LoginLayout() {
  return (
    <LoginLayoutContainer>
      <Outlet />
    </LoginLayoutContainer>
  );
}
