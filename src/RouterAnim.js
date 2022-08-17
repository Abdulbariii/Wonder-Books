import React from "react";
import Library from "./pages/Library";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Bookshelves from "./pages/Bookshelves";
import SignUp from "./pages/SignUp";
import {
  Router,
  Navigate,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useAuth from "./hook/useAuth";

export default function RouterAnim() {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/bookshelves"
            element={user ? <Bookshelves /> : <Navigate replace to="/login" />}
          />
          <Route path="/book/:id" element={<Book />} />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate replace to="/" /> : <SignUp></SignUp>}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
