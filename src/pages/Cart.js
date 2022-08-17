import React from "react";
import { motion } from "framer-motion";
import CartsList from "../components/carts/CartsList";
import CartTitle from "../components/carts/CartTitle";
import useCollection from "../hook/useCollection";
import useAuth from "../hook/useAuth";
import PaymentCart from "../components/carts/PaymentCart";
export default function Cart() {
  const { user } = useAuth();
  const { documents, error } = useCollection(
    "Carts",
    ["uid", "==", user ? user.uid : null],
    ["createdAt", "desc"]
  );
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` flex  md:mx-24 md:flex-wrap md:flex-col lg:flex-nowrap py-10 lg:py-0   lg:px-5 justify-start flex-col   items-center min-h-screen`}
    >
      <div>
        <CartTitle documents={documents}></CartTitle>
      </div>
      <div className="flex justify-around flex-wrap items-start w-full">
        {" "}
        <CartsList documents={documents}></CartsList>
        <PaymentCart documents={documents}></PaymentCart>
      </div>
    </motion.div>
  );
}
