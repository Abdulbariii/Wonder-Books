import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
export default function useAuth() {
  const auth = useContext(authContext);

  if (!auth) {
    throw Error("NOT IN THE SCOPE OF WRAP");
  }

  return auth;
}
