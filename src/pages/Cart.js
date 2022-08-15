import React from "react";
import { motion } from "framer-motion";
import CartsList from "../components/carts/CartsList";
import CartTitle from "../components/carts/CartTitle";
export default function Cart() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` flex  md:mx-24 md:flex-wrap md:flex-col lg:flex-nowrap py-10 lg:py-0   lg:px-5 justify-center flex-col   items-center min-h-screen`}
    >
      <div>
        <CartTitle></CartTitle>
      </div>
      <div className="flex justify-between items-start w-full">
        {" "}
        <CartsList></CartsList>
      </div>
    </motion.div>
  );
}
