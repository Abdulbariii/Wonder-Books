import React from "react";
import useTheme from "../../hook/useTheme";

export default function Modal(props) {
  const colors = ["bg-sky-200", "bg-red-200", "bg-yellow-200", "bg-violet-200"];

  const closeModal = () => {
    props.setModal(false);
  };

  const modeHandler = (mode) => {
    modeChange(mode);
  };
  const { mode, colorChange, color, modeChange } = useTheme();
  return (
    <div
      className={`fixed z-50 flex flex-col justify-around items-center left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-96 h-[400px] ${
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
            className="bg-white text-indigo-600 w-32 h-10 text-xl rounded-2xl duration-200 transition-all shadow-sm shadow-[#0000006b] hover:shadow-md hover:shadow-[#0000006b]"
          >
            Light
          </button>
          <button
            onClick={() => {
              modeHandler("bg-gray-900");
            }}
            className={`bg-gray-900 text-indigo-300 w-32 h-10 text-xl duration-200 transition-all shadow-sm shadow-[#0000006b] hover:shadow-md hover:shadow-[#0000006b] rounded-2xl`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className={`${color} h-[2px] w-72 rounded-2xl`}></div>
      <div className="flex gap-5 flex-col p-5 justify-around items-start">
        <h1
          className={` text-2xl ${
            mode === "bg-gray-50" ? "text-white" : "text-black"
          }`}
        >
          Theme
        </h1>
        <div className="flex gap-2 mr-10">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => colorChange(color)}
              className={`${color} rounded-full w-8 h-8 m-2 cursor-pointer `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
