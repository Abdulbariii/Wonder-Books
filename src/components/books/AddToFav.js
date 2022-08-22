import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
import { useFirestore } from "../../hook/useFirestore";
import useAuth from "../../hook/useAuth";
import useCollection from "../../hook/useCollection";
export default function AddToFav(props) {
  const { color, text, mode, openModal } = useTheme();

  const [checkFavorite, setCheckFavorite] = useState(false);
  const { user } = useAuth();
  const { addDocument, deleteDocument } = useFirestore("Favorite");
  const { documents } = useCollection("Favorite");
  return (
    <div>
      <button
        onClick={() => {
          setCheckFavorite(checkFavorite === true ? false : true);
          checkFavorite === false
            ? addDocument({
                uid: user.uid,
                image: props.image && props.image,
                title: props.title && props.title,
              })
            : documents.map((doc) => {
                doc.title === props.title && deleteDocument(doc.id);
              });
        }}
        className={`flex lg:gap-2  hover:scale-125 transition-all duration-150 items-center justify-center text-base  ${
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
