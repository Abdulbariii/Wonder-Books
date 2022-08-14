import React, { createContext, useReducer, useState } from "react";
export const cartAdd = createContext();

export default function AddCart(props) {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <cartAdd.Provider value={{ cart, setCart }}>
      {props.children}
    </cartAdd.Provider>
  );
}
