"use client";

import React from "react";
import { Message, User } from "../types/types";
import redis from "../database/redis";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

interface InputState {
  input: string;
}

export default function ChatInput() {
  const [input, setInput] = React.useState<InputState["input"]>("");

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
      user: {} as User, //arreglar esto dsps
      timestamp: new Date(),
    };
    const uploadMessagetToUpstash = async (): Promise<void> => {
      const data = await axios("api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
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
