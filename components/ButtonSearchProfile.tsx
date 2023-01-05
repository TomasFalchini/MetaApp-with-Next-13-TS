"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { UserType } from "../types/types";

interface Props {
  email: string;
}

function ButtonSearchProfile({ email }: Props) {
  const route = useRouter();

  const searchProfile = async () => {
    const res = await axios.get(`api/searchUser/${email}`);
    const data: UserType | null = res.data.user;
    if (!data) {
      return "toogle que diga q no se encontro el perfil buscado";
    } else {
      return route.push(`/profile/${data.uid}`);
    }
  };

  return (
    <button
      onClick={searchProfile}
      type="button"
      className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 mr-2 -ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      Search
    </button>
  );
}

export default ButtonSearchProfile;
