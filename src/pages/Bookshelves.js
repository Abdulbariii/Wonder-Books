import React from "react";
import { motion } from "framer-motion";
import useTheme from "../hook/useTheme";
import {
  Router,
  Navigate,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Favorite from "./bookshelves/Favorite";
import ReadingNow from "./bookshelves/ReadingNow";
import ToRead from "./bookshelves/ToRead";
import HaveRead from "./bookshelves/HaveRead";
export default function Bookshelves() {
  const { text } = useTheme();
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className=" md:mx-24 py-10 lg:py-14 justify-center items-center flex  flex-col gap-5 px-5  min-h-screen"
    >
      <h1 className={`text-4xl  ${text}`}>Under the construction</h1>

      <Routes>
        <Route path="/bookshelves/favorite" element={<Favorite></Favorite>} />
      </Routes>
    </motion.div>
  );
}
