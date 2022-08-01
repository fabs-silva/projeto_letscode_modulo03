import { useState } from 'react';
import { profile } from '../../assets/profile';
import { FormFieldset } from '../../components/FormFieldset';
import { LoginContainer } from '../../components/LoginContainer';
import { variables } from '../../styles/variables';
import { IProfile, IToken } from '../../types';
const { colors, fontSizes, fontWeight } = variables;

export function Login(props: {
  setGetData: (profileLogin: IProfile) => void;
  setToken: (token: IToken) => void;
}) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please, fill all inputs before continue!');
      return;
    }

    if (username !== profile.username || password !== profile.password) {
      setError('Invalid username and/or password!');
      return;
    }

    setTimeout(() => {
      props.setGetData(profile);
      props.setToken({ token: profile.password });
      setUsername('');
      setPassword('');
      setError('');
    }, 1500);
  };

  return (
    <LoginContainer error={error} onClick={handleSubmit} login={true}>
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
    </LoginContainer>
  );
}
