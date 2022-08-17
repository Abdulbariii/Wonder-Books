import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ToRead from "../../pages/bookshelves/ToRead";
import HaveRead from "../../pages/bookshelves/HaveRead";
import Favorite from "../../pages/bookshelves/Favorite";
import ReadingNow from "../../pages/bookshelves/ReadingNow";
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-20 text-red-300">
      <Link to="/bookshelves/favorite">Favorite</Link>
      <Link to="/bookshelves/toread">To Read</Link>

      <Link to="/bookshelves/readingnow">readingnow</Link>
      <Link to="/bookshelves/haveread">Have Read</Link>
    </div>
  );
}
