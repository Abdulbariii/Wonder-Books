import React from "react";
import useTheme from "../../hook/useTheme";
import { motion } from "framer-motion";
export default function Modal(props) {
  const colors = ["bg-sky-200", "bg-red-200", "bg-yellow-200", "bg-violet-200"];
  const texts = [
    "text-sky-200",
    "text-red-200",
    "text-yellow-200",
    "text-violet-200",
  ];
  const dataTheme = [
    {
      bg: "bg-sky-200",
      text: "text-sky-400",
    },
    {
      bg: "bg-rose-200",
      text: "text-rose-400",
    },
    {
      bg: "bg-amber-200",
      text: "text-amber-400",
    },
    {
      bg: "bg-indigo-200",
      text: "text-indigo-400",
    },
    {
      bg: "bg-teal-200",
      text: "text-teal-400",
    },
  ];
  const closeModal = () => {
    props.setModal(false);
  };

  const modeHandler = (mode) => {
    modeChange(mode);
  };

  const { mode, colorChange, color, modeChange, textChange } = useTheme();
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
      className={` z-50 flex flex-col justify-around items-center trans w-80 md:h-[400px] h-96 md:w-96 ${
        mode === "bg-gray-900" ? "bg-gray-50" : "bg-gray-900"
      } shadow-sm shadow-[#00000069] rounded-2xl`}
    >
      <div
        onClick={() => {
          closeModal();
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
      <div className="flex gap-5 flex-col  p-5 justify-around items-start">
        <h1
          className={` text-2xl ${
            mode === "bg-gray-50" ? "text-white" : "text-black"
          }`}
        >
          Mode
        </h1>
        <div className="flex gap-5 justify-around  items-start ">
          <button
            onClick={() => {
              modeHandler("bg-gray-50");
            }}
            className={`bg-white text-indigo-600 w-32 h-10 text-xl rounded-2xl shadow-[#0000006b] duration-200 transition-all shadow-sm  hover:shadow-md hover:shadow-[#0000006b]`}
          >
            Light
          </button>
          <button
            onClick={() => {
              modeHandler("bg-gray-900");
            }}
            className={`bg-gray-900 text-indigo-300 w-32 h-10 text-xl duration-200 transition-all shadow-sm  ${
              mode === "bg-gray-50"
                ? "shadow-[#ffffff68]"
                : "shadow-[#00000062]"
            } hover:shadow-md hover:shadow-[#ffffff6b] rounded-2xl`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className={`${color} h-[5px] w-72 rounded-2xl`}></div>
      <div className="flex gap-5 flex-col p-5 justify-around items-start">
        <h1
          className={` text-2xl ${
            mode === "bg-gray-50" ? "text-white" : "text-black"
          }`}
        >
          Theme
        </h1>
        <div className="flex gap-2 mr-10">
          {dataTheme.map((color) => (
            <div
              key={color}
              onClick={() => {
                textChange(color.text);
                colorChange(color.bg);
              }}
              className={`${color.bg} rounded-full w-8 h-8 m-2 cursor-pointer `}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
