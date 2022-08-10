import { useContext, useState } from 'react';
import { RiHeartPulseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  LoginError,
  LoginLink,
  LoginLogo,
  LoginWrapperContainer,
} from '../../components/BlockComponents/LoginBlock/styles';
import { Button } from '../../components/ElementComponents/Button';
import { FormFieldset } from '../../components/ElementComponents/FormFieldset';
import { AuthContext } from '../../contexts/auth';

const LoginFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export function Login() {
  const { callbackLogin, login, loading } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  let navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    login(username, password, navigate);

    if (!loading) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <LoginWrapperContainer>
      <LoginLogo>
        <RiHeartPulseLine />
        ESCFy
      </LoginLogo>
      {callbackLogin && <LoginError>{callbackLogin.message}</LoginError>}
      <LoginFormWrapper>
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
      </LoginFormWrapper>
      <Button onClick={handleSubmit}>Login</Button>
      <LoginLink>
        <p>
          Not a member?{' '}
          <Link to="/sign-up">
            <strong>Sign up here!</strong>
          </Link>
        </p>
      </LoginLink>
    </LoginWrapperContainer>
  );
}
