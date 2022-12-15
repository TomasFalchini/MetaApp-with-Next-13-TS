import React from "react";
import ChatInput from "../../../components/ChatInput";
import MessageList from "../../../components/MessageList";

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
