import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", link: "/" },
  { name: "Library", link: "/library" },
  { name: "Favorite", link: "/favorite" },
];

export default function Footer() {
  return (
    <div className="flex flex-col bg-cyan-900 h-2/5 px-10 py-5 w-full gap-5  justify-around items-center">
      <div className="flex flex-col md:flex-row justify-around items-stretch gap-28">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-4xl font-normal text-white">WONDER BOOKS</h1>
          <div className="flex justify-evenly items-center gap-5">
            {links.map((link) => (
              <Link className="text-xl font-light text-white" to={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-around items-stretch">
          <div>
            <h1 className="text-sky-400 font-normal text-2xl">Contact</h1>
          </div>

          <p className="text-white font-light text-xl">BookWonder@gmail.com</p>
          <p className="text-white font-light text-xl">0750XXXXXXX</p>
          <p className="text-white font-light text-xl">Erbil,Kurdistan</p>
        </div>
      </div>
      <div>
        <p className="text-sky-400">C:2022 : Abdulbari</p>
      </div>
    </div>
  );
}
