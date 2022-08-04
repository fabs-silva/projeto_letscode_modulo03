import { RiHeartPulseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ElementComponents/Button';
import {
  LoginError,
  LoginLink,
  LoginLogo,
  LoginWrapperContainer,
} from './styles';

type LoginWrapperProps = {
  error: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  login: boolean;
  children?: React.ReactNode;
};

export function LoginWrapper({
  error,
  onClick,
  login,
  children,
  ...rest
}: LoginWrapperProps) {
  return (
    <LoginWrapperContainer>
      <LoginLogo>
        <RiHeartPulseLine />
        ESCFy
      </LoginLogo>
      {error && <LoginError>{error}</LoginError>}
      {children}
      <Button onClick={onClick}>{login ? 'Login' : 'Sign Up'}</Button>
      <LoginLink>
        {login ? (
          <p>
            Not a member?{' '}
            <Link to="/sign-up">
              <strong>Sign up here!</strong>
            </Link>
          </p>
        ) : (
          <p>
            Already a member?{' '}
            <Link to="/">
              <strong>Sign in here!</strong>
            </Link>
          </p>
        )}
      </LoginLink>
    </LoginWrapperContainer>
  );
}
