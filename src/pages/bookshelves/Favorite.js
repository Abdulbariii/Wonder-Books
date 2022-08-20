import React, { useEffect } from "react";
import BookshelfCards from "../../components/bookshelf/BookshelfCards";
import useAuth from "../../hook/useAuth";
import useCollection from "../../hook/useCollection";
import useTheme from "../../hook/useTheme";
import { useFirestore } from "../../hook/useFirestore";
export default function Favorite() {
  const { user } = useAuth();
  const { documents } = useCollection("Favorite", [
    "uid",
    "==",
    user ? user.uid : null,
  ]);
  const { addDocument, deleteDocument } = useFirestore("Favorite");

  const { text } = useTheme();
  return (
    <div
      className={`${text} h-96 grow w-[50rem] px-10 flex justify-start items-start text-start`}
    >
      <BookshelfCards
        deleteDocument={deleteDocument}
        documents={documents && documents}
      ></BookshelfCards>
    </div>
  );
}
