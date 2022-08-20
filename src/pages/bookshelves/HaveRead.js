import React from "react";
import useCollection from "../../hook/useCollection";
import BookshelfCards from "../../components/bookshelf/BookshelfCards";
import useTheme from "../../hook/useTheme";
import useAuth from "../../hook/useAuth";
import { useFirestore } from "../../hook/useFirestore";
export default function HaveRead() {
  const { text } = useTheme();
  const { user } = useAuth();
  const { documents } = useCollection("HaveRead", [
    "uid",
    "==",
    user ? user.uid : null,
  ]);
  const { addDocument, deleteDocument } = useFirestore("HaveRead");
  return (
    <div className={`${text} h-96 grow w-[50rem] px-10`}>
      <BookshelfCards
        deleteDocument={deleteDocument}
        documents={documents && documents}
      ></BookshelfCards>
    </div>
  );
}
