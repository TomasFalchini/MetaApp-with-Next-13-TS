import React from "react";
import { UserType } from "../types/types";
import ButtonToChat from "./ButtonToChat";
import Image from "next/image";

interface Props {
  user: UserType;
}

function UserCard({ user }: Props) {
  return (
    <div>
      <Image
        src={user.image}
        alt="User pic"
        width={10}
        height={10}
        className={"agregar tailwind"}
      />
      <p>{user.name}</p>
      <ButtonToChat id={user.uid} />
    </div>
  );
}

export default UserCard;
