import React from "react";
import useTheme from "../../hook/useTheme";
import { useState } from "react";
export default function AddToHaveRead() {
  const { color, text, mode, openModal } = useTheme();

  const [checkHaveRead, setCheckHaveRead] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setCheckHaveRead(checkHaveRead === true ? false : true);
        }}
        className={`flex gap-2  hover:scale-110 transition-all duration-150 items-center justify-center text-base  ${
          checkHaveRead === true
            ? text
            : mode === "bg-gray-900"
            ? "text-gray-50"
            : "text-gray-900"
        }`}
      >
        <ion-icon
          name={`checkmark-${checkHaveRead === true ? "sharp" : "outline"}`}
        ></ion-icon>
        <h1>Have read</h1>
      </button>
    </div>
  );
}
