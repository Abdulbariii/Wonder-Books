import React, { useEffect } from "react";
import useAuth from "../../hook/useAuth";

import useCollection from "../../hook/useCollection";

export default function CartsList() {
  const { user } = useAuth();

  const { documents, error } = useCollection(
    "Carts",
    ["uid", "==", user ? user.uid : null],
    ["createdAt", "desc"]
  );

  return (
    <div className="flex flex-wrap gap-10">
      {documents &&
        documents.map((doc) => (
          <div
            key={doc.id}
            className="flex justify-around items-center p-3 rounded-2xl shadow-white shadow-sm w-[28rem] h-36"
          >
            <img
              className="w-28 h-32 object-cover rounded-2xl "
              src={doc.image}
            />

            <h1>{doc.title}</h1>
          </div>
        ))}
    </div>
  );
}
