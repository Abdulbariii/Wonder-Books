import React from "react";
import { motion } from "framer-motion";
import Card from "../components/LibrarySection/Card";
export default function Library() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className=" md:mx-24 py-20 lg:py-0   px-5  min-h-screen"
    >
      <h1 className="text-7xl text-red-500">Library</h1>
      <Card></Card>
    </motion.div>
  );
}
