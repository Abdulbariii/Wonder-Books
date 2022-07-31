import React from "react";
import { motion } from "framer-motion";
import Card from "../components/LibrarySection/Card";
import SearchBar from "../components/filters/SearchBar";
export default function Library() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className=" md:mx-24 py-20 lg:py-14 justify-center items-center flex flex-col gap-5 px-5  min-h-screen"
    >
      <SearchBar></SearchBar>
      <Card></Card>
    </motion.div>
  );
}
