import React from "react";
import useTheme from "../../hook/useTheme";

export default function ThemeButton(props) {
  const { mode } = useTheme();

  const openModal = () => {
    props.setModal(true);
  };
  return (
    <div
      className={`text-4xl h-12 flex justify-center cursor-pointer hover:scale-125 transition-all duration-200 items-center w-12 shadow-sm shadow-[#00000077] rounded-full ${mode} `}
      onClick={() => {
        openModal();
      }}
    >
      <ion-icon
        style={{
          color: mode === "bg-gray-900" ? "#ffffff" : "#000000",
        }}
        name="color-palette-outline"
      ></ion-icon>
    </div>
  );
}
