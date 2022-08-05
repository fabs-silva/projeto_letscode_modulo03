import { useEffect } from "react";
import { RiHeartPulseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ElementComponents/Button";
import { IProfile } from "../../../types";
import { LoginLink, LoginLogo, LoginWrapperContainer } from "./styles";

type LoginWrapperProps = {
  error: IProfile | Error | null;
  login: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export function LoginWrapper({
  error,
  login,
  onClick,
  children,
  ...rest
}: LoginWrapperProps) {
  useEffect(() => {
    console.log(typeof error);
  }, [error]);
  return (
    <LoginWrapperContainer>
      <LoginLogo>
        <RiHeartPulseLine />
        ESCFy
      </LoginLogo>
      {/*typeof error === Error && <LoginError>{error}</LoginError>}*/}
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
    </LoginWrapperContainer>
  );
}
