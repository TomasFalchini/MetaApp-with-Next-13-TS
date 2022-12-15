"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonToChat({ id }: { id: string }) {
  const router = useRouter();

  const goToChat = () => {
    router.push(`chat/${id}`);
  };

  return <button onClick={goToChat}>Send a message</button>;
}

export default ButtonToChat;
