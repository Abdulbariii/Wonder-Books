import React from "react";
import useCollection from "../../hook/useCollection";

export default function CartsList() {
  const { documents, error } = useCollection("Carts");
  console.log(documents && documents);
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
