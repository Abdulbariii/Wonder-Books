import React from "react";
import useTheme from "../../hook/useTheme";
import { useState } from "react";
export default function BookshelfOption() {
  const { color, text, mode, openModal } = useTheme();

  const [checkFavorite, setCheckFavorite] = useState(false);
  const [checkToRead, setCheckToRead] = useState(false);
  const [checkRnow, setCheckRnow] = useState(false);
  const [checkHaveRead, setCheckHaveRead] = useState(false);
  return (
    <div
      className={`${text}  cursor-pointer items-start gap-2 flex flex-col  text-lg  w-32`}
    >
      <ion-icon name="add-outline"></ion-icon>

      <h1 className="font-medium ">Add to bookshelf as</h1>
      <div className="items-start gap-5  flex flex-col mt-5">
        <button
          onClick={() => {
            setCheckFavorite(checkFavorite === true ? false : true);
          }}
          className={`flex gap-2 items-center justify-center text-base  ${
            checkFavorite === true
              ? text
              : mode === "bg-gray-900"
              ? "text-gray-50"
              : "text-gray-900"
          }`}
        >
          <ion-icon
            name={`heart-${checkFavorite === true ? "sharp" : "outline"}`}
          ></ion-icon>
          <h1>Favorite</h1>
        </button>

        <button
          onClick={() => {
            setCheckToRead(checkToRead === true ? false : true);
          }}
          className={`flex gap-2 items-center justify-center text-base  ${
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

        <button
          onClick={() => {
            setCheckRnow(checkRnow === true ? false : true);
          }}
          className={`flex gap-2 items-center justify-center text-base  ${
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

        <button
          onClick={() => {
            setCheckHaveRead(checkHaveRead === true ? false : true);
          }}
          className={`flex gap-2 items-center justify-center text-base  ${
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
    </div>
  );
}
