import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ToRead from "../../pages/bookshelves/ToRead";
import HaveRead from "../../pages/bookshelves/HaveRead";
import Favorite from "../../pages/bookshelves/Favorite";
import ReadingNow from "../../pages/bookshelves/ReadingNow";
import useTheme from "../../hook/useTheme";
export default function Dashboard() {
  const { color, text, mode } = useTheme();
  return (
    <div
      className={`flex ${
        mode === "bg-gray-900" ? "text-white" : "text-gray-900"
      } flex-col gap-20  border-r-2 font-light pr-4 text-2xl`}
    >
      <Link className={`flex items-center gap-2 `} to="/bookshelves/favorite">
        <ion-icon name="heart-outline"></ion-icon>
        Favorite
      </Link>

      <Link className={`flex items-center gap-2 `} to="/bookshelves/toread">
        <ion-icon name="today-outline"></ion-icon>
        To Read
      </Link>

      <Link className={`flex items-center gap-2 `} to="/bookshelves/readingnow">
        <ion-icon name="flask-outline"></ion-icon>
        Reading now
      </Link>
      <Link className={`flex items-center gap-2 `} to="/bookshelves/haveread">
        <ion-icon name="checkmark-outline"></ion-icon>
        Have Read
      </Link>
    </div>
  );
}
