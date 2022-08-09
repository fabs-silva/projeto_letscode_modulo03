import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeProfile } from "../assets/mockups/profile";
import { IAuthContext, IProfile } from "../types";
import { fakeLogin } from "../utils/fakeLogin";

export const AuthContext = createContext({} as IAuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children, ...rest }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [callbackLogin, setCallbackLogin] = useState<Error | null>(null);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);

  const loginPage = (status: boolean) => {
    let navigate = useNavigate();
    if (status) {
      setIsLoginPage(true);
      navigate("/", { replace: false });
    }
    setIsLoginPage(false);
    navigate("/sign-up", { replace: false });
  };

  const login = (username: string, password: string) => {
    setLoading(true);
    setIsLoggedIn(false);
    setCallbackLogin(null);

    fakeLogin(username, password, (error) => {
      setLoading(false);

      if (!error) {
        setIsLoggedIn(true);
        setProfile(fakeProfile);
      } else {
        setCallbackLogin(error);
      }
    });
  };

  const logout = () => {
    setLoading(false);
    setIsLoggedIn(false);
    setProfile({} as IProfile);
    setCallbackLogin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        callbackLogin,
        login,
        logout,
        profile,
        loginPage,
        isLoginPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//https://codesandbox.io/embed/login-flow-w-react-context-api-p9j96
