"use client";

import React from "react";
import { useRouter } from "next/navigation";

function ButtonToProfile({ id }: { id: string }) {
  const router = useRouter();

  const goToProfile = () => {
    router.push(`/profile/${id}`);
  };

  return <button onClick={goToProfile}>SEE PROFILE</button>;
}

export default ButtonToProfile;
