"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonToChat({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const goToChat = () => {
    router.push(`chat/${id}`);
  };

  return <button onClick={goToChat}>{children}</button>;
}

export default ButtonToChat;
