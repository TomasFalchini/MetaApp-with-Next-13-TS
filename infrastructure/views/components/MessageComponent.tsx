import React from "react";
import { Message } from "../../../types/types";
import Image from "next/image";

type Props = Omit<Message, "userRecive" | "uid">;

function MessageComponent({ content, user, timestamp }: Props) {
  return (
    <div>
      <div>
        <Image
          className="rounded-full mx-4 object-contain shadow-md hover:scale-105"
          loading="lazy"
          width={15}
          height={15}
          alt="Profile picture"
          src={user.image}
        />
        <span>{user.name}</span>
      </div>
      <div>
        <p>{content}</p>
        <span>{timestamp.toDateString()}</span>
      </div>
    </div>
  );
}

export default MessageComponent;
