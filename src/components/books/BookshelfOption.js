import React from "react";
import useTheme from "../../hook/useTheme";
import AddToFav from "./AddToFav";
import AddToRead from "./AddToRead";
import AddToRnow from "./AddToRnow";
import { useState } from "react";
import AddToHaveRead from "./AddToHaveRead";
import useAuth from "../../hook/useAuth";

import { Link } from "react-router-dom";
export default function BookshelfOption() {
  const { color, text, mode, openModal } = useTheme();

  const [checkFavorite, setCheckFavorite] = useState(false);
  const [checkToRead, setCheckToRead] = useState(false);
  const { user } = useAuth();
  const [checkHaveRead, setCheckHaveRead] = useState(false);
  return (
    <div className={`${text}   items-start gap-2 flex flex-col  text-lg  w-32`}>
      <ion-icon name="add-outline"></ion-icon>

      <h1 className="font-medium ">Add to bookshelf as</h1>
      <div className="items-start gap-5  flex flex-col mt-5">
        {user && (
          <>
            <AddToFav></AddToFav>
            <AddToRead></AddToRead>
            <AddToRnow></AddToRnow>
            <AddToHaveRead></AddToHaveRead>
          </>
        )}

        {!user && (
          <Link
            to="/login"
            className="text-sm font-extralight decoration-red-500 underline"
          >
            You Have to login to add books into your bookshelf
          </Link>
        )}
      </div>
    </div>
  );
}
