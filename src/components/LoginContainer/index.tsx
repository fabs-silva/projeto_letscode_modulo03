import { RiHeartPulseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/bg.jpg";
import { Button } from "../../components/Button";
import { variables } from "../../styles/variables";
const { colors, fontSizes, fontWeight } = variables;

const LoginContainerMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bg}) fixed no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const LoginLogo = styled.div`
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeight.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const LoginError = styled.p`
  font-size: ${fontSizes.md};
  font-weight: ${fontWeight.xs};
  color: ${colors.mainRed};
`;

const LoginArea = styled.form`
  min-width: 25rem;
  max-height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primaryColor};
  padding: 2rem;
  gap: 1rem;
  box-shadow: 0px 0px 15px ${colors.whiteAlpha};
  overflow-y: auto;
  overflow-x: hidden;
`;

const LoginLink = styled.div`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeight.xs};

  & a {
    font-weight: ${fontWeight.md};
  }
`;

type LoginContainerProps = {
  error: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  login: boolean;
  children?: any;
  style?: {};
};

export function LoginContainer({
  error,
  onClick,
  login,
  children,
  style,
}: LoginContainerProps) {
  return (
    <LoginContainerMain>
      <LoginArea>
        <LoginLogo>
          <RiHeartPulseLine />
          ESCFy
        </LoginLogo>
        {error && <LoginError>{error}</LoginError>}
        {children}
        <Button onClick={onClick}>{login ? "Login" : "Sign Up"}</Button>
        <LoginLink>
          {login ? (
            <p>
              Not a member?{" "}
              <Link to="/sign-up">
                <strong>Sign up here!</strong>
              </Link>
            </p>
          ) : (
            <p>
              Already a member?{" "}
              <Link to="/">
                <strong>Sign in here!</strong>
              </Link>
            </p>
          )}
        </LoginLink>
      </LoginArea>
    </LoginContainerMain>
  );
}
