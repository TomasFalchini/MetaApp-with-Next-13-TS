import axios from "axios";
import React from "react";
import useSWR from "swr";
import { UserType } from "../types/types";
import LoadingComponent from "./LoadingComponent";
import UserCard from "./UserCard";

function Contacts() {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR("/contacts", async () =>
    axios.get("/contacts").then((res) => res.data)
  );

  if (isLoading) return <LoadingComponent />;
  if (error) throw new Error("something went wrong");
  return (
    <div>
      {users.map((el: UserType) => {
        return <UserCard user={el} />;
      })}
    </div>
  );
}

export default Contacts;
