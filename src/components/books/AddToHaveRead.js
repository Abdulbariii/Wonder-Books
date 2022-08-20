import React from "react";
import useTheme from "../../hook/useTheme";
import { useState } from "react";
import { useFirestore } from "../../hook/useFirestore";
import useCollection from "../../hook/useCollection";
import useAuth from "../../hook/useAuth";
export default function AddToHaveRead(props) {
  const { color, text, mode, openModal } = useTheme();

  const [checkHaveRead, setCheckHaveRead] = useState(false);
  const { addDocument, deleteDocument } = useFirestore("HaveRead");
  const { documents } = useCollection("HaveRead");
  const { user } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          setCheckHaveRead(checkHaveRead === true ? false : true);
          checkHaveRead === false
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
