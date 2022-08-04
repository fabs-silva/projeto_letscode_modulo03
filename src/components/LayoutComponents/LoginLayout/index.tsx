import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../../assets/images/bg.jpg';
import theme from '../../../styles/theme';

const { colors } = theme;

const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.alpha.background},
    url(${bg}) fixed no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export function LoginLayout() {
  return (
    <LoginContainer>
      <Outlet />
    </LoginContainer>
  );
}
