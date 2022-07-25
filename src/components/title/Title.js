import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="flex flex-col gap-10 justify-evenly items-start ">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-normal">WONDER BOOKS</h1>
        <p className="text-3xl font-light ">
          is that place that you can find wonder books
        </p>
      </div>

      <Link
        to="/library"
        className="w-36 p-5 h-10 font-light text-3xl flex justify-center items-center bg-red-200 rounded-2xl"
      >
        Books
      </Link>
    </div>
  );
}
