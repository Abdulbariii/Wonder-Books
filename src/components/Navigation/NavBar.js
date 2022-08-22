import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";

import useLogout from "../../hook/useLogout";
import useCollection from "../../hook/useCollection";
import useTheme from "../../hook/useTheme";
import ThemeButton from "../Themes/ThemeButton";
export default function NavBar(props) {
  const { mode, text, activeShelf, searchBookshelfHandler } = useTheme();
  const { user } = useAuth();

  const { logout } = useLogout();
  const links = [
    { name: "Home", link: "/" },
    { name: "Library", link: "/library" },
    { name: "Bookshelves", link: `${activeShelf}` },
  ];

  useEffect(() => {
    searchBookshelfHandler("nothing");
  }, [activeShelf]);
  const [cartLenght, setCartLength] = useState(0);

  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen(open ? false : true);
  };

  const { documents, error } = useCollection(
    "Carts",
    ["uid", "==", user ? user.uid : null],
    ["createdAt", "desc"]
  );

  useEffect(() => {
    setCartLength(user ? documents && documents.length : 0);
  }, [user, documents]);
  return (
    <div
      className={`md:flex transition-all duration-300   justify-around bg-transparent px-5 py-5 md:px-3 md:py-3 relative   w-full ${
        open ? "h-fit" : "h-24"
      } overflow-hidden items-start md:items-center  `}
    >
      <div className="flex flex-col  justify-start items-start">
        <Link
          className={`text-4xl md:text-2xl  lg:text-4xl  md:m-0 ${
            mode === "bg-gray-900" ? "text-white" : "text-black"
          } font-semibold`}
          to="/"
        >
          Wonder Books
        </Link>

        {user && user.displayName && (
          <h1
            className={`text-xl  font-light ${
              mode === "bg-gray-900" ? "text-white" : "text-black"
            }`}
          >
            Welcome {user.displayName}
          </h1>
        )}
      </div>

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
      <div
        className={`flex lg:text-2xl text-xl ${
          mode === "bg-gray-900" ? "text-white" : "text-black"
        }  font-light hover:text-opacity-60  border-solid md:flex-row m-5 md:m-0 transition-all duration-300   flex-col gap-5 items-start justify-around  md:items-center`}
      >
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? ` ${text} border-b-2` : ` `
            }
            to={link.link}
            key={link.name}
          >
            {link.name}
          </NavLink>
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
            {cartLenght}
          </span>
          <div className={`${text} mt-2`}>
            <ion-icon name="bag-add-outline"></ion-icon>
          </div>
        </Link>
        {!user && (
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
            <div className={`${text} mt-2`}>
              <ion-icon name="log-in-outline"></ion-icon>
            </div>
          </Link>
        )}

        {user && (
          <button
            onClick={logout}
            className="text-2xl font-normal items-center justify-around  flex "
          >
            <span
              className={`m-2  ${
                mode === "bg-gray-900" ? "text-white" : "text-black"
              }`}
            >
              logout
            </span>
            <div className={`${text} mt-2`}>
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
