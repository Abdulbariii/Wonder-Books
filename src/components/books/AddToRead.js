import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
import { useFirestore } from "../../hook/useFirestore";
import useCollection from "../../hook/useCollection";
import useAuth from "../../hook/useAuth";
export default function AddToRead(props) {
  const { color, text, mode, openModal } = useTheme();

  const [checkToRead, setCheckToRead] = useState(false);
  const { addDocument, deleteDocument } = useFirestore("ToRead");
  const { documents } = useCollection("ToRead");
  const { user } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          setCheckToRead(checkToRead === true ? false : true);
          checkToRead === false
            ? addDocument({
                uid: user.uid,
                image: props.image && props.image,
                title: props.title && props.title,
              })
            : documents.map((doc) => {
                doc.title === props.title && deleteDocument(doc.id);
              });
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
