import React, { useState } from "react";
import { projectAuth } from "../firebase/Config";
import useAuth from "./useAuth";

export default function useSignUp() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();
  const signUp = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Not Complete");
      }
      await res.user.updateProfile({ displayName });
      dispatch({ type: "LOGIN", payload: res.user });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  return { signUp, isPending, error };
}
