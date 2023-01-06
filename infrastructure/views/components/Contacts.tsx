import axios from "axios";
import React from "react";
import { UserType } from "../../../types/types";

import UserCard from "./UserCard";

const getContacts = async () => {
  const data = await axios.get(`http://localhost:3000/api/contacts/user123`);
  return data.data.contacts;
};

async function Contacts() {
  const users: UserType[] = await getContacts();
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Your Contacts
        </h2>
      </div>
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((el: UserType) => {
          return <UserCard user={el} />;
        })}
      </div>
    </div>
  );
}

export default Contacts;
