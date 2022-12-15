import cookies from "js-cookie";
import { User } from "firebase/auth";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

export const saveUserInCookie = (user: User) => {
  cookies.set("auth", JSON.stringify(user), { expires: 1 / 24 });
};

export const removeUserFromCookie = () => {
  cookies.remove("auth");
};
