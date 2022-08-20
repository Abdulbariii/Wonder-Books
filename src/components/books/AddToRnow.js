import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
export default function AddToRnow() {
  const { color, text, mode, openModal } = useTheme();
  const [checkRnow, setCheckRnow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setCheckRnow(checkRnow === true ? false : true);
        }}
        className={`flex gap-2  hover:scale-110 transition-all duration-150 items-center justify-center text-base  ${
          checkRnow === true
            ? text
            : mode === "bg-gray-900"
            ? "text-gray-50"
            : "text-gray-900"
        }`}
      >
        <ion-icon
          name={`flask-${checkRnow === true ? "sharp" : "outline"}`}
        ></ion-icon>
        <h1>Reading now</h1>
      </button>
    </div>
  );
}
