import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center space-y-10">
        <div className="flex items-center content-center space-x-5 space-y-5">
          <Image src="..." height={10} width={10} alt="image component" />
          <p className="text-blue-500">
            Welcome to <strong>Meta Messenger</strong>2.0
          </p>
        </div>
        <div>
          <Link href="auth/sign-in">SIGN IN</Link>
        </div>
      </div>
    </header>
  );
}
