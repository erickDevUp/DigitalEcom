"use client";
import React, { useState } from "react";

type Props = { show: boolean };

export default function CardSide() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section
        className={`h-full w-full sm:w-auto bg-transparent fixed z-10 top-0 ${
          show ? "right-0" : "right-[-1000px]"
        } transition-all delay-400`}
      >
        <div className="rounded-3xl bg-white shadow h-full overflow-auto pr-5 ">
          <button
            className="fixed top-5 sm:right-12 right-5"
            onClick={() => setShow(!show)}
          >
            X
          </button>
          <div className="px-4 py-6 sm:px-8 sm:py-10 ">
            <div className="flow-root p-5 ">
              <ul className="-my-8">
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
                      </div>

                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        <svg
                          className="h-5 w-5"
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
                <li className="flex space-y-3 py-6 text-left flex-row space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
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
                </li>{" "}
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
                      </div>

                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        <svg
                          className="h-5 w-5"
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
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
                      </div>

                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
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
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
                      </div>

                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        <svg
                          className="h-5 w-5"
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
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                      1
                    </span>
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          36EU - 4US
                        </p>
                      </div>

                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
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
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                <span className="text-xs font-normal text-gray-400">USD</span>{" "}
                2499.00
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Place Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
