import { createContext } from "react";
import { profile } from "../assets/mockups/profile";
import { IProfile } from "../types";

export const UserContext = createContext({} as IProfile);

export const UserProvider = (props: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={profile}>
      {props.children}
    </UserContext.Provider>
  );
};
