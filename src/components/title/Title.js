import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
export default function Title() {
  const { color, mode } = useTheme();

  return (
    <div className="flex flex-col gap-10 justify-evenly items-start ">
      <div className="flex flex-col gap-3">
        <h1
          className={`text-6xl font-normal ${
            mode === "bg-gray-900" ? "text-white" : "text-black"
          }`}
        >
          WONDER BOOKS
        </h1>
        <p
          className={`text-3xl font-light  ${
            mode === "bg-gray-900" ? "text-white" : "text-black"
          }`}
        >
          is that place that you can find wonder books
        </p>
      </div>

      <Link
        to="/library"
        className={`w-60 p-7 h-10 font-normal hover:bg-opacity-50 transition-all duration-150 text-4xl flex justify-center items-center ${color} rounded-2xl`}
      >
        Books
      </Link>
    </div>
  );
}
