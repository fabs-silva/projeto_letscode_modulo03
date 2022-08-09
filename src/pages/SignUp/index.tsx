import { useContext, useState } from "react";
import { RiHeartPulseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  LoginError,
  LoginLink,
  LoginLogo,
  LoginWrapperContainer,
} from "../../components/BlockComponents/LoginBlock/styles";
import { Button } from "../../components/ElementComponents/Button";
import { FormFieldset } from "../../components/ElementComponents/FormFieldset";
import { AuthContext } from "../../contexts/auth";

const SignUpForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 35rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export function SignUp() {
  let navigate = useNavigate();
  const { callbackLogin, isLoggedIn, login, loginPage, isLoginPage } =
    useContext(AuthContext);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !imageUrl
    ) {
      setError(new Error("Please, fill all inputs before continue!"));
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setImageUrl("");
    setUsername("");
    setPassword("");
    navigate("/", { replace: true });
  };

  return (
    <LoginWrapperContainer>
      <LoginLogo>
        <RiHeartPulseLine />
        ESCFy
      </LoginLogo>
      {callbackLogin && <LoginError>{callbackLogin.message}</LoginError>}
      <SignUpForm>
        <FormFieldset
          label="First Name"
          placeholder="First Name"
          type="text"
          value={firstName}
          setValue={(firstName: string) => setFirstName(firstName)}
        />
        <FormFieldset
          label="Last Name"
          placeholder="Last Name"
          type="text"
          value={lastName}
          setValue={(lastName: string) => setLastName(lastName)}
        />
        <FormFieldset
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          setValue={(email: string) => setEmail(email)}
        />
        <FormFieldset
          label="Username"
          placeholder="Username"
          type="text"
          value={username}
          setValue={(username: string) => setUsername(username)}
        />
        <FormFieldset
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          setValue={(password: string) => setPassword(password)}
        />
        <FormFieldset
          label="Image URL"
          placeholder="Image"
          type="text"
          value={imageUrl}
          setValue={(imageUrl: string) => setImageUrl(imageUrl)}
        />
      </SignUpForm>
      <Button onClick={handleSubmit}>Sign Up</Button>
      <LoginLink>
        <p>
          Already a member?{" "}
          <Link to="/">
            <strong>Sign in here!</strong>
          </Link>
        </p>
      </LoginLink>
    </LoginWrapperContainer>
  );
}
