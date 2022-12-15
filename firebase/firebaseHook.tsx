import React from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserType } from "../types/types";
import formatAuthUser from "../utils/formatAuthUser";

interface AuthState {
  currentUser: UserType | null;
  loading: boolean;
}

export default function useFirebaseAuthHook(): AuthState {
  const [currentUser, setCurrentUser] =
    React.useState<AuthState["currentUser"]>(null);
  const [loading, setLoading] = React.useState<AuthState["loading"]>(true);

  React.useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(formatAuthUser(user));
        setLoading(true);
      } else {
        setCurrentUser(null);
        setLoading(false);
        return;
      }
    });

    return () => unsuscribe();
  }, []);

  return {
    currentUser,
    loading,
  };
}
