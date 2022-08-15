import React, { useEffect } from "react";
import useAuth from "../../hook/useAuth";

import useCollection from "../../hook/useCollection";
import { useFirestore } from "../../hook/useFirestore";
import useTheme from "../../hook/useTheme";

export default function CartsList() {
  const { user } = useAuth();
  const { deleteDocument } = useFirestore("Carts");
  const { documents, error } = useCollection(
    "Carts",
    ["uid", "==", user ? user.uid : null],
    ["createdAt", "desc"]
  );
  const { mode, color } = useTheme();
  return (
    <div className={`flex flex-col gap-10 p-5 bg-opacity-30 rounded-2xl`}>
      {documents &&
        documents.map((doc) => (
          <div
            key={doc.id}
            className="flex relative justify-around items-center p-3 rounded-2xl  shadow-lg w-[28rem] h-40"
          >
            <img
              className="w-28 h-36 object-cover rounded-md "
              src={doc.image}
            />
            <div className="flex  w-48 gap-5 justify-between items-stretch">
              <h1
                className={`  ${
                  mode === "bg-gray-900" ? "text-white" : "text-black"
                } `}
              >
                {doc.title}
              </h1>
              <button
                onClick={() => {
                  deleteDocument(doc.id);
                }}
                className={`text-4xl text-red-600 cursor-pointer`}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
