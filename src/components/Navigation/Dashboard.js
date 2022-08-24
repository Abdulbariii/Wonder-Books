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
      } flex  lg:flex-col flex-row justify-around  lg:mr-0 mr-0  lg:justify-start lg:items-start items-center lg:gap-20 gap-10 lg:h-96 flex-wrap md:flex-nowrap h-16 border-gray-500 lg:w-40 w-full  lg:border-r-2 border-r-0 font-normal lg:pr-4 pr-0 text-lg`}
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
                ? ` ${text} flex   items-center   border-gray-500 lg:gap-4  sm:h-10  md:h-20 lg:h-fit  gap-2 border-b-2  scale-110 lg:pb-2  transition-all duration-150`
                : `flex   items-center   lg:gap-4  gap-2 sm:h-10  lg:h-fit md:h-20 `
            }
            to={nav.linkPage}
          >
            <ion-icon name={nav.icon}></ion-icon>

            <span> {nav.navName}</span>
          </NavLink>
        ))}
    </div>
  );
}
