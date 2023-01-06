"use client";

import React, { useEffect } from "react";
import useGetMessages from "../hooks/useGetMessages";
import { pusherClient } from "../../../pusher/pusher";
import { Message } from "../../../types/types";
import MessageComponent from "./MessageComponent";

interface Props {
  reciveruid: string;
}

export default function MessageList({ reciveruid }: Props) {
  const { messages, error, isLoading, mutate } = useGetMessages(
    "user.id",
    reciveruid
  );

  useEffect(() => {
    if ("i am in the window that sent the message") {
      return;
    }
    if ("i am in another window") {
      const channel = pusherClient.subscribe("messages-chanel");
      channel.bind("new-message-added", function (data: Message) {
        mutate([data, ...messages], {
          rollbackOnError: true,
        });
      });
    }
  }, [messages, pusherClient, mutate]);

  if (isLoading) return <span>Loading...</span>;
  if (error) throw new Error("Something went wrong. Please go to home page");
  if (messages) {
    return (
      <div>
        {messages.map((el: Message) => {
          return (
            <div>
              <MessageComponent
                user={el.user}
                content={el.content}
                timestamp={el.timestamp}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return <div>MessageList</div>;
}
