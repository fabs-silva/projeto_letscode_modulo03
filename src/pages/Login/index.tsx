import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../components/BlockComponents/LoginBlock";
import { FormFieldset } from "../../components/ElementComponents/FormFieldset";
import { AuthContext } from "../../contexts/auth";
import { IProfile } from "../../types";

export function Login(props: { user: IProfile }) {
  let navigate = useNavigate();
  const { callbackLogin, isLoggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    login(username, password);
    setUsername("");
    setPassword("");
    navigate("/home", { replace: true });
  };

  return (
    <LoginWrapper
      error={callbackLogin}
      onClick={handleSubmit}
      login={isLoggedIn}
    >
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
