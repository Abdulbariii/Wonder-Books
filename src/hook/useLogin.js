import React, { useState } from "react";
import { projectAuth } from "../firebase/Config";
import useAuth from "./useAuth";

export default function useLogin() {
  const { dispatch } = useAuth();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const login = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Not Complete");
      }

      dispatch({ type: "LOGIN", payload: res.user });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };
  return { error, isPending, login };
}
