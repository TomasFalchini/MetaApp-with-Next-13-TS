import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogOutButton from "./LogOutButton";

export default function Header() {
  const session = true;
  //firebase auth.currentUser

  if (session) {
    return (
      <header className="sticky top-5 z-50 bg-neutral-100 justify-between items-center p-15 shadow-md hover:shadow-inner">
        <div className="flex space-x-10 justify-center items-center p-2">
          <Image
            className="rounded-full mx-4 object-contain shadow-md hover:scale-105"
            loading="lazy"
            width={15}
            height={15}
            alt="Profile picture"
            src="session.profilePicture"
          />
          <p className="text-blue-300">Logged in as:</p>
          <p className="font-bold text-lg">
            <strong>{session}</strong>
          </p>
        </div>
        <LogOutButton />
      </header>
    );
  }

  return (
    <header className="sticky top-5 z-50 bg-neutral-100 justify-center items-center p-15 shadow-md hover:shadow-inner">
      <div className="flex flex-col items-center space-y-10 p-2">
        <div className="flex items-center content-center space-x-5 p-3 space-y-5 m-2">
          <Image src="..." loading="lazy" height={10} width={10} alt="Meta" />
          <p className="text-blue-500">
            Welcome to <strong>Meta Messenger</strong> 2.0
          </p>
        </div>
        <div>
          <Link
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded px-4 py-2"
            href="auth/sign-in"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </header>
  );
}
