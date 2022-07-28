import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTheme from "../hook/useTheme";
import ThemeButton from "./Themes/ThemeButton";
export default function NavBar(props) {
  const { mode } = useTheme();
  const links = [
    { name: "Home", link: "/" },
    { name: "Library", link: "/library" },
    { name: "Favorite", link: "/favorite" },
  ];

  const url = useParams();
  console.log(url);

  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen(open ? false : true);
  };
  return (
    <div
      className={`md:flex transition-all duration-300  justify-around bg-transparent px-5 py-5 md:px-3 md:py-3 relative   w-full ${
        open ? "h-fit" : "h-20"
      } overflow-hidden items-start md:items-center  `}
    >
      <Link
        className={`text-4xl m-5 md:m-0 ${
          mode === "bg-gray-900" ? "text-white" : "text-black"
        } font-bold`}
        to="/"
      >
        Wonder Books
      </Link>
      <div
        onClick={() => {
          menuHandler();
        }}
        className="transition-all duration-300 absolute right-4 top-7 md:hidden text-4xl"
      >
        <ion-icon
          style={{ color: mode === "bg-gray-900" ? "#ffffff" : "#000000" }}
          name={`${!open ? "menu" : "close"}-outline`}
        ></ion-icon>
      </div>
      <div className="flex md:flex-row m-5 md:m-0 transition-all duration-300   flex-col gap-5 items-start justify-around  md:items-center">
        {links.map((link) => (
          <Link
            className={`  text-2xl ${
              mode === "bg-gray-900" ? "text-white" : "text-black"
            } font-light hover:text-opacity-60 transition-all duration-100`}
            to={link.link}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex-col   md:m-0 gap-5  flex md:flex-row justify-around items-start md:items-center">
        <ThemeButton setModal={props.setModal}></ThemeButton>
        <Link
          className="text-2xl font-normal items-center justify-around  flex "
          to="/cart"
        >
          <span
            className={`m-2  ${
              mode === "bg-gray-900" ? "text-white" : "text-black"
            }`}
          >
            0
          </span>
          <ion-icon
            style={{ color: mode === "bg-gray-900" ? "#ffffff" : "#000000" }}
            name="bag-add-outline"
          ></ion-icon>
        </Link>
        <Link
          className="text-2xl font-normal items-center justify-around  flex "
          to="/login"
        >
          <span
            className={`m-2  ${
              mode === "bg-gray-900" ? "text-white" : "text-black"
            }`}
          >
            Login
          </span>
          <ion-icon
            style={{ color: mode === "bg-gray-900" ? "#ffffff" : "#000000" }}
            name="log-in-outline"
          ></ion-icon>
        </Link>
      </div>
    </div>
  );
}