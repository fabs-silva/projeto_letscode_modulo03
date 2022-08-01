import { useState } from "react";
import { RiHeartPulseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/bg.jpg";
import { profile } from "../../assets/profile";
import { variables } from "../../styles/variables";
import { IProfile, IToken } from "../../types";
const { colors, fontSizes, fonts, fontWeight } = variables;

const LoginContainer = styled.main`
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
  font-weight: ${fontWeight.xl};
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
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primaryColor};
  padding: 2rem;
  gap: 1.5rem;
  box-shadow: 0px 0px 15px ${colors.whiteAlpha};

  & button {
    margin: 1rem 0 0.5rem 0;
    padding: 0.75rem 1.5rem;
    background-color: ${colors.accentColor};
    color: ${colors.mainWhite};
    text-transform: uppercase;
  }

  & a {
    font-size: ${fontSizes.md};
    font-weight: ${fontWeight.md};
  }

  & p {
    font-weight: ${fontWeight.xs};
  }
`;

const LoginField = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  & input {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: ${colors.whiteAlpha};
    color: ${colors.mainWhite};
    font-size: ${fontSizes.md};
  }

  & input::placeholder {
    font-family: ${fonts.jost};
    font-size: ${fontSizes.md};
    color: ${colors.mainWhite};
  }

  & input:focus-visible {
    border-color: ${colors.accentColorLight};
  }
`;

export function Login(props: {
  setGetData: (profileLogin: IProfile) => void;
  setToken: (token: IToken) => void;
}) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please, fill all inputs before continue!");
      return;
    }

    if (username !== profile.username || password !== profile.password) {
      setError("Invalid username and/or password!");
      return;
    }

    setTimeout(() => {
      props.setGetData(profile);
      props.setToken({ token: profile.password });
      setUsername("");
      setPassword("");
      setError("");
    }, 1500);
  };

  return (
    <LoginContainer>
      <LoginArea>
        <LoginLogo>
          <RiHeartPulseLine />
          ESCFy
        </LoginLogo>
        {error && <LoginError>{error}</LoginError>}
        <LoginField>
          <label>Username</label>
          <input
            type="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </LoginField>
        <LoginField>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </LoginField>
        <button onClick={handleSubmit}>Login</button>
        <p>
          Not a member?{" "}
          <Link to="#">
            <strong>Sign up here!</strong>
          </Link>
        </p>
      </LoginArea>
    </LoginContainer>
  );
}
