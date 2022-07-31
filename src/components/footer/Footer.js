import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hook/useTheme";
const links = [
  { name: "Home", link: "/" },
  { name: "Library", link: "/library" },
  { name: "Favorite", link: "/favorite" },
];

export default function Footer() {
  const { mode, color, text } = useTheme();
  console.log(color);
  return (
    <div
      className={`flex flex-col ${
        mode === "bg-gray-900" ? "bg-gray-50" : "bg-gray-900"
      } h-2/5 px-10 py-5 w-full gap-5  justify-between items-center`}
    >
      <div className="flex flex-col md:flex-row w-full justify-around items-stretch gap-10">
        <div
          className={`flex flex-col ${
            mode === "bg-gray-900" ? "text-gray-900" : "text-gray-50"
          }  justify-between items-start `}
        >
          <h1 className="text-4xl font-normal md:pb-0 pb-2 ">WONDER BOOKS</h1>
          <div className="flex justify-evenly items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                className="text-xl font-light "
                to={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`flex ${
            mode === "bg-gray-900" ? "text-gray-900" : "text-gray-50"
          }  flex-col justify-around items-stretch h-full`}
        >
          <div>
            <h1
              className={`${
                color === "bg-violet-400" ? "text-violet-400" : null
              } font-normal text-2xl ${text}`}
            >
              Contact
            </h1>
          </div>

          <p className=" font-light text-xl">BookWonder@gmail.com</p>
          <p className=" font-light text-xl">0750XXXXXXX</p>
          <p className=" font-light text-xl">Erbil,Kurdistan</p>
        </div>

        <div
          className={`text-3xl flex justify-around gap-5 ${text} cursor-pointer`}
        >
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </div>
      <div>
        <p className={`${text} ml-14`}>C:2022 : Abdulbari</p>
      </div>
    </div>
  );
}
