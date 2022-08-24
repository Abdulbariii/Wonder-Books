import React from "react";
import useCollection from "../../hook/useCollection";
import BookshelfCards from "../../components/bookshelf/BookshelfCards";
import useTheme from "../../hook/useTheme";
import useAuth from "../../hook/useAuth";
import { useFirestore } from "../../hook/useFirestore";
export default function ReadingNow() {
  const { user } = useAuth();
  const { documents } = useCollection("ReadingNow", [
    "uid",
    "==",
    user ? user.uid : null,
  ]);
  const { addDocument, deleteDocument } = useFirestore("ReadingNow");

  const { text } = useTheme();
  return (
    <div
      className={`${text} h-96 grow lg:w-[50rem] w-fit md:w-[30rem] lg:px-10 ml-4 lg:ml-0  mb-10 lg:mb-0 px-2 flex lg:justify-start lg:items-start justify-center items-center text-start`}
    >
      <BookshelfCards
        deleteDocument={deleteDocument}
        documents={documents && documents}
      ></BookshelfCards>
    </div>
  );
}
