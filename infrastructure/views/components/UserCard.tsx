import React from "react";
import { UserType } from "../../../types/types";
import ButtonToChat from "./ButtonToChat";
import Image from "next/image";

interface Props {
  user: UserType;
}

function UserCard({ user }: Props) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <Image
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
        alt="User pic"
        width={10}
        height={10}
        className="mx-auto mb-4 w-36 h-36 rounded-full"
      />

      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">Helene Engels</a>
      </h3>
      <p>CTO/Co-founder</p>
      <ul className="flex justify-center mt-4 space-x-4">
        <li>
          <a
            href="#"
            className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <ButtonToChat id={user.uid}>
            <a
              href="#"
              className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-blue-600 dark:text-blue-500"
                focusable="false"
                data-prefix="fas"
                data-icon="paper-plane"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                ></path>
              </svg>
            </a>
          </ButtonToChat>
        </li>
      </ul>
    </div>
  );
}

export default UserCard;
