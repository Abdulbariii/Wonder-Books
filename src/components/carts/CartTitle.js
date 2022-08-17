import React from "react";
import useAuth from "../../hook/useAuth";
import useTheme from "../../hook/useTheme";

export default function CartTitle({ documents }) {
  const { user } = useAuth();
  const { text, mode } = useTheme();
  return (
    <div
      className={`flex-col flex gap-5 mb-20 ${
        mode === "bg-gray-900" ? "text-white" : "text-black"
      }`}
    >
      <h1 className={`text-3xl font-light`}>
        Welcome{" "}
        <span className={`${text} font-normal`}>
          {user && user.displayName}
        </span>
      </h1>
      {documents ? (
        <h1
          className={`flex justify-around gap-1 items-center text-xl font-light  `}
        >
          Amazing! you have a good taste in books{" "}
          <ion-icon name="happy-outline"></ion-icon>
        </h1>
      ) : (
        <h1
          className={`flex justify-around gap-1 items-center text-xl font-light  `}
        >
          We hope you find a book <ion-icon name="sad-outline"></ion-icon>
        </h1>
      )}
    </div>
  );
}
