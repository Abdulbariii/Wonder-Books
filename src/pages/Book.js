import React from "react";
import { motion } from "framer-motion";
export default function Book() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      Book
    </motion.div>
  );
}
