import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
export default function AddToRead() {
  const { color, text, mode, openModal } = useTheme();

  const [checkToRead, setCheckToRead] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setCheckToRead(checkToRead === true ? false : true);
        }}
        className={`flex gap-2  hover:scale-110 transition-all duration-150 items-center justify-center text-base  ${
          checkToRead === true
            ? text
            : mode === "bg-gray-900"
            ? "text-gray-50"
            : "text-gray-900"
        }`}
      >
        <ion-icon
          name={`today-${checkToRead === true ? "sharp" : "outline"}`}
        ></ion-icon>
        <h1>To Read</h1>
      </button>
    </div>
  );
}
