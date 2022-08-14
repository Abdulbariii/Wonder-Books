import React from "react";
import useTheme from "../../hook/useTheme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ModalWarning() {
  const { color, text, mode, openModal } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={` z-50 flex flex-col p-2 text-4xl justify-around items-center trans w-72 h-56 md:w-80 ${
        mode === "bg-gray-900"
          ? "bg-gray-50 text-black"
          : "bg-gray-900 text-white"
      } shadow-sm shadow-[#00000069] rounded-2xl`}
    >
      <div
        onClick={() => {
          openModal(false);
        }}
        className="absolute text-5xl hover:scale-150  transition-all duration-200  cursor-pointer right-0 top-0 "
      >
        <ion-icon
          style={{
            color: mode === "bg-gray-50" ? "#ffffff" : "#000000",
          }}
          name={`close-outline`}
        ></ion-icon>
      </div>
      <ion-icon name="warning-outline"></ion-icon>
      <h1 className="text-xl text-center">
        You have to login to add items in your cart at
      </h1>
      <Link
        onClick={() => {
          openModal(false);
        }}
        to="/login"
        className={`w-24 h-10 p-3 ${color} ${text} flex justify-center items-center rounded-xl text-xl`}
      >
        Login
      </Link>
    </motion.div>
  );
}
