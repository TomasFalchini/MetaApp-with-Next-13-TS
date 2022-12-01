import React from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "../types/types";

interface AuthState {
  currentUser: User | null;
  loading: boolean;
}

export default function useFirebaseAuthHook(): AuthState {
  const [currentUser, setCurrentUser] =
    React.useState<AuthState["currentUser"]>(null);
  const [loading, setLoading] = React.useState<AuthState["loading"]>(true);

  React.useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName || "No name",
          image: user.photoURL || "No image",
          uid: user.uid,
          lastSignIn: new Date(user.metadata.lastSignInTime || Date.now()),
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
