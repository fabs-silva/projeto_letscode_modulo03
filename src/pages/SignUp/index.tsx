import { useState } from 'react';
import styled from 'styled-components';
import { LoginWrapper } from '../../components/BlockComponents/LoginBlock';
import { FormFieldset } from '../../components/ElementComponents/FormFieldset';

const SignUpForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 35rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export function SignUp() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

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
      setError('Please, fill all inputs before continue!');
      return;
    }
  };

  return (
    <LoginWrapper error={error} onClick={handleSubmit} login={false}>
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
    </LoginWrapper>
  );
}
