import { profile } from "../assets/mockups/profile";
import { IProfile } from "../types";

export const fakeLogin = (
  username: string,
  password: string,
  callback: (cb: IProfile | Error | null) => void
) =>
  setTimeout(() => {
    if (username.length === 0 || password.length === 0) {
      return callback(new Error("Please, fill all inputs before continue!"));
    }

    if (username !== "guest" || password !== "123456") {
      return callback(new Error("Invalid username and/or password"));
    }

    return callback(profile);
  }, 1000);
