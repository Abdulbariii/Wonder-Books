import React from "react";
import { useState } from "react";
import useTheme from "../../hook/useTheme";
import { useFirestore } from "../../hook/useFirestore";
import useCollection from "../../hook/useCollection";
import useAuth from "../../hook/useAuth";
export default function AddToRnow(props) {
  const { color, text, mode, openModal } = useTheme();
  const [checkRnow, setCheckRnow] = useState(false);
  const { addDocument, deleteDocument } = useFirestore("ReadingNow");
  const { documents } = useCollection("ReadingNow");
  const { user } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          setCheckRnow(checkRnow === true ? false : true);
          checkRnow === false
            ? addDocument({
                uid: user.uid,
                image: props.image && props.image,
                title: props.title && props.title,
              })
            : documents.map((doc) => {
                doc.title === props.title && deleteDocument(doc.id);
              });
        }}
        className={`flex lg:gap-2  hover:scale-110 transition-all duration-150 items-center justify-center text-base  ${
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
