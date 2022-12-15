import { UserType } from "../types/types";
import { User } from "firebase/auth";

export default function formatAuthUser(user: User): UserType {
  return {
    name: user.displayName!,
    image: user.photoURL!,
    uid: user.uid,
    lastSignIn: new Date(user.metadata.lastSignInTime || Date.now()),
  };
}
