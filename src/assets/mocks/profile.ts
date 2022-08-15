import { IProfile } from "../../types";
import profileImage from "../images/profile-pic.jpg";

export const fakeProfile: IProfile = {
  id: 1,
  username: "guest",
  firstName: "Guest",
  lastName: "Visitor",
  image: profileImage,
  email: "guest@escfy.eu",
  password: "123456",
};
