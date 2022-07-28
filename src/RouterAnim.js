import React from "react";
import Library from "./pages/Library";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export default function RouterAnim() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
