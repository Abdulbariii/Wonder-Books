import React, { useState } from "react";
import { projectAuth } from "../firebase/Config";
import useAuth from "./useAuth";

export default function useSignUp() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();
  const signUp = async (displayName, email, password) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Not Complete");
      }
      await res.user.updateProfile({ displayName });
      dispatch({ type: "LOGIN", payload: res });
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  return { signUp, isPending, error };
}
