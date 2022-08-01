import { useState } from "react";
import { IToken } from "../types";

export default function useToken() {
  const getToken = (): string | undefined => {
    const tokenString = localStorage.getItem("token");

    if (!tokenString) {
      return;
    }
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: IToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const deleteToken = (): void => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return {
    setToken: saveToken,
    token,
    deleteToken,
  };
}
