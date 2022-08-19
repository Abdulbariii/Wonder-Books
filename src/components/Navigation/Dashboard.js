import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ToRead from "../../pages/bookshelves/ToRead";
import HaveRead from "../../pages/bookshelves/HaveRead";
import Favorite from "../../pages/bookshelves/Favorite";
import ReadingNow from "../../pages/bookshelves/ReadingNow";
import useTheme from "../../hook/useTheme";
export default function Dashboard() {
  const { color, text, mode, activeBookshelf } = useTheme();
  const [shapeIcon, setShapeIcon] = useState("outline");
  const dashboardNav = [
    {
      navName: "Favorite",
      linkPage: "/bookshelves/favorite",
      icon: `heart-outline`,
    },
    {
      navName: "To Read",
      linkPage: "/bookshelves/toread",
      icon: `today-outline`,
    },
    {
      navName: "Reading now",
      linkPage: "/bookshelves/readingnow",
      icon: `flask-outline`,
    },
    {
      navName: "Have Read",
      linkPage: "/bookshelves/haveread",
      icon: `checkmark-outline`,
    },
  ];

  return (
    <div
      className={`flex transition-all duration-150 ${
        mode === "bg-gray-900" ? "text-white" : "text-gray-900"
      } flex-col gap-20 h-[30rem] border-gray-500   border-r-2 font-normal pr-4 text-lg`}
    >
      {dashboardNav &&
        dashboardNav.map((nav) => (
          <NavLink
            onClick={() => {
              activeBookshelf(nav.linkPage);
            }}
            key={nav.navName}
            className={({ isActive }) =>
              isActive
                ? ` ${text} flex   items-center border-gray-500 gap-4 border-b-2 scale-105 pb-2 transition-all duration-150`
                : `flex  items-center gap-4 `
            }
            to={nav.linkPage}
          >
            <ion-icon name={nav.icon}></ion-icon>
            {nav.navName}
          </NavLink>
        ))}
    </div>
  );
}
