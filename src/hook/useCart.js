import React, { useContext } from "react";
import { cartAdd } from "../context/AddCart";
export default function useCart() {
  const carts = useContext(cartAdd);

  if (!carts) {
    throw new Error("WRAP THEME");
  }
  return carts;
}
