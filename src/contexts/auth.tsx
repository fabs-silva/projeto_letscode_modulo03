import { createContext, useState } from "react";
import { profile } from "../assets/mockups/profile";
import { IAuthContext, IProfile } from "../types";
import { fakeLogin } from "../utils/fakeLogin";

export const AuthContext = createContext({} as IAuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children, ...rest }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [callbackLogin, setCallbackLogin] = useState<IProfile | Error | null>(
    null
  );

  const login = (username: string, password: string) => {
    setLoading(true);
    setIsLoggedIn(false);
    setCallbackLogin(null);

    fakeLogin(username, password, (error) => {
      setLoading(false);

      if (!error) {
        setIsLoggedIn(true);
        setCallbackLogin(profile);
      } else {
        setCallbackLogin(error);
      }
    });
  };

  const logout = () => {
    setLoading(false);
    setIsLoggedIn(false);
    setCallbackLogin(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loading, callbackLogin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//https://codesandbox.io/embed/login-flow-w-react-context-api-p9j96
