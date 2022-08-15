import { createContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { fakeProfile } from '../assets/mocks/profile';
import { IAuthContext, IProfile } from '../types';
import { fakeLogin } from '../utils/fakeLogin';

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
      navigate('/', { replace: false });
    }
    setIsLoginPage(false);
    navigate('/sign-up', { replace: false });
  };

  const login = (
    username: string,
    password: string,
    navigate: NavigateFunction
  ) => {
    setLoading(true);
    setCallbackLogin(null);

    const fakeLoginItem = fakeLogin(username, password);

    if (fakeLoginItem !== null) {
      setCallbackLogin(fakeLoginItem);
      return;
    }

    setIsLoggedIn(true);
    setProfile(fakeProfile);
    setLoading(false);
    navigate('/home', { replace: true });
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
