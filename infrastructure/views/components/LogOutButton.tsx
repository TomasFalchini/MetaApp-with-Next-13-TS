"use client";
import React from "react";

import { auth } from "../../../firebase/firebase";
import { signOut } from "firebase/auth";

export default function LogOutButton() {
  const LogOut: () => void = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded px-4 py-2">
      SING OUT
    </button>
  );
}
