import React, { useState } from "react";
import useAuth from "./useAuth";
import { projectAuth } from "../firebase/Config";
export default function useLogout() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuth();
  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
}
