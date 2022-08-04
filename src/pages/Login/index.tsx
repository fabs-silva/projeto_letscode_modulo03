import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper } from '../../components/BlockComponents/LoginBlock';
import { FormFieldset } from '../../components/ElementComponents/FormFieldset';
import { IProfile } from '../../types';

export function Login(props: { profile: IProfile }) {
  let navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please, fill all inputs before continue!');
      return;
    }

    if (
      username !== props.profile.username ||
      password !== props.profile.password
    ) {
      setError('Invalid username and/or password!');
      return;
    }

    setTimeout(() => {
      navigate('/home', { replace: true });
      setUsername('');
      setPassword('');
      setError('');
    }, 1500);
  };

  return (
    <LoginWrapper error={error} onClick={handleSubmit} login={true}>
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
    </LoginWrapper>
  );
}
