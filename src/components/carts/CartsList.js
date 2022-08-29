import React, { useEffect } from "react";
import useAuth from "../../hook/useAuth";

import useCollection from "../../hook/useCollection";
import { useFirestore } from "../../hook/useFirestore";
import useTheme from "../../hook/useTheme";

export default function CartsList({ documents }) {
  const { user } = useAuth();
  const { deleteDocument } = useFirestore("Carts");

  const { mode, color } = useTheme();
  return (
    <div className={`flex flex-col gap-10 p-5 bg-opacity-30 rounded-2xl`}>
      {documents &&
        documents.map((doc) => (
          <div
            key={doc.id}
            className="flex relative justify-around items-center p-3 rounded-2xl  shadow-lg md:w-[28rem] w-80  h-32  md:h-40"
          >
            <img
              className="md:w-28 md:h-36 w-20 h-28 object-cover rounded-md "
              src={doc.image}
            />
            <div className="flex text-xs md:text-lg w-48 gap-5 justify-between items-stretch">
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
                className={`text-4xl hover:scale-125 transition-all text-red-600 cursor-pointer`}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
