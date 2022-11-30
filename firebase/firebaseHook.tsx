import React from "react";
import { auth } from "./firebase";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { User } from "../types/types";

interface AuthState {
  currentUser: User | null;
  loading: boolean;
}

export default function useFirebaseAuthHook(): User | null {
  const [currentUser, setCurrentUser] =
    React.useState<AuthState["currentUser"]>(null);
  const [loading, setLoading] = React.useState<AuthState["loading"]>(true);

  React.useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName,
          image: user.photoURL,
          uid: user.uid,
          lastSignIn: new Date(user.metadata.lastSignInTime),
        });
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
