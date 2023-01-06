"use client";
import React from "react";

import { auth } from "../../../firebase/firebase";
import { signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";

const fb = "https://meta-2cdf6.firebaseapp.com/__/auth/handler";

/* 

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
    
  });



  
  */

export default function LoginButton() {
  const provider = new FacebookAuthProvider();

  const LogIn: () => void = () => {};

  return (
    <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded px-4 py-2">
      SIGN IN
    </button>
  );
}
