import React, { createContext, useReducer } from "react";

export const themeContext = createContext();
const colorReducer = (state, action) => {
  switch (action.ty) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    case "CHANGE_SEARCH_QUERY":
      return { ...state, searchBook: action.payload };
  }
};

export function ContextTheme(props) {
  const [state, distpatch] = useReducer(colorReducer, {
    color: "bg-sky-200",
    text: "text-sky-500",
    mode: "bg-gray-50",
    searchBook: "Programming",
  });

  const colorChange = (color) => {
    distpatch({ ty: "CHANGE_COLOR", payload: color });
  };
  const textChange = (text) => {
    distpatch({ ty: "CHANGE_TEXT", payload: text });
  };

  const modeChange = (mode) => {
    distpatch({ ty: "CHANGE_MODE", payload: mode });
  };
  const searchChange = (searchBook) => {
    distpatch({ ty: "CHANGE_SEARCH_QUERY", payload: searchBook });
  };

  return (
    <themeContext.Provider
      value={{ ...state, searchChange, colorChange, modeChange, textChange }}
    >
      {props.children}
    </themeContext.Provider>
  );
}
