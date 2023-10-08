import Image from "next/image";
import React from "react";

type Props = {};

export default function Card({}: Props) {
  return (
    <>
      <li className="flex space-y-3 py-6 text-left flex-row space-x-5 sm:space-y-0">
        <div className="shrink-0 relative">
          <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
            1
          </span>
          <Image
            className="h-24 w-24 max-w-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60"
            alt="card store buy"
            width={96}
            height={96}
          />
        </div>

        <div className="relative flex flex-1 flex-col justify-between">
          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
            <div className="pr-8 sm:pr-5">
              <p className="text-base font-semibold text-gray-900">
                Nike Air Max 2019
              </p>
              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
            </div>

            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                $1259.00
              </p>
            </div>
          </div>

          <div className="absolute  right-0 flex  bottom-0 top-auto">
            <button
              type="button"
              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
            >
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                  className=""
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
