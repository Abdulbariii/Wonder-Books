import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
import { useFirestore } from "../../hook/useFirestore";
export default function AddToFav() {
  const { color, text, mode, openModal } = useTheme();

  const [checkFavorite, setCheckFavorite] = useState(false);

  const { addDocument, deleteDocument } = useFirestore("Favorite");

  return (
    <div>
      <button
        onClick={() => {
          setCheckFavorite(checkFavorite === true ? false : true);
        }}
        className={`flex gap-2 hover:scale-125 transition-all duration-150 items-center justify-center text-base  ${
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
    </div>
  );
}
