import React from "react";
import ChatInput from "../../../infrastructure/views/components/ChatInput";
import MessageList from "../../../infrastructure/views/components/MessageList";

export default function ChatWithOneUser({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main>
      <MessageList reciveruid={params.id} />
      <ChatInput reciveruid={params.id} />
    </main>
  );
}
