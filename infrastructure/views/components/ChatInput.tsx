"use client";

import React from "react";
import { Message, UserType } from "../../../types/types";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import useGetMessages from "../hooks/useGetMessages";

interface Props {
  reciveruid: string;
}

interface InputState {
  input: string;
}

export default function ChatInput({ reciveruid }: Props) {
  const [input, setInput] = React.useState<InputState["input"]>("");
  const { messages, mutate } = useGetMessages("userid", reciveruid);

  const changeInput: (evt: React.ChangeEvent<HTMLInputElement>) => void = (
    evt
  ) => {
    setInput(evt.target.value);
  };

  const addMessage: (evt: React.FormEvent<HTMLFormElement>) => void = (evt) => {
    evt.preventDefault();
    if (!input) return;
    const messageToSend = input;
    setInput("");
    const id = uuidv4();
    const message: Message = {
      uid: id,
      content: messageToSend,
      userRecive: reciveruid, //usuario al que le estoy mandando el msj
      user: {} as UserType, //arreglar esto dsps
      timestamp: new Date(),
    };
    const uploadMessagetToMongo = async (): Promise<Array<Message>> => {
      const data = await axios("api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ message: message }),
      });

      if (data) {
        return [message, ...messages];
      }
      return messages;

      //data es {upload: true or false}
    };

    mutate(uploadMessagetToMongo, {
      optimisticData: [message, ...messages],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-5 flex px-10 py-5 space-x-5 border-t border-gray-200 z-50 w-full"
    >
      <input
        value={input}
        onChange={changeInput}
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-300 focus:border-transparent px-6 py-2 focus:py-3 disabled:opacity-35 disabled:cursor-not-allowed space-5"
        placeholder="Enter a message here"
        type="text"
      />
      <button
        disabled={!input}
        type="submit"
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:opacity-35 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}
