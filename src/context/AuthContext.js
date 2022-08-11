import React, { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/Config";

export const authContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return { ...state, user: null };
    case "CHECK_AUTH":
      return {
        ...state,
        user: action.payload,
        checkAuth: true,
      };
  }
};
export default function AuthContext(props) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    checkAuth: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "CHECK_AUTH", payload: user });
      unsub();
    });
  }, []);
  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </authContext.Provider>
  );
}
