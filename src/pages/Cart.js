import React from "react";
import { motion } from "framer-motion";
import CartsList from "../components/carts/CartsList";
export default function Cart() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` flex  md:mx-24 md:flex-wrap  lg:flex-nowrap py-10 lg:py-0   lg:px-5 justify-center flex-col md:flex-row  items-start min-h-screen`}
    >
      Cart
      <CartsList></CartsList>
    </motion.div>
  );
}
