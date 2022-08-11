import "./App.css";
import React, { useState } from "react";
import Library from "./pages/Library";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/Navigation/NavBar";
import { Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import useTheme from "./hook/useTheme";
import Modal from "./components/Themes/Modal";
import RouterAnim from "./RouterAnim";
function App() {
  const { mode } = useTheme();
  const [modal, setModal] = useState(false);
  return (
    <div className={`App ${mode}  `}>
      {modal && <Modal setModal={setModal}></Modal>}
      <div className={`blur-sm   ${modal ? "blur-sm " : "blur-none"}`}>
        <NavBar setModal={setModal}></NavBar>

        <div className="mx-10   py-5">
          <RouterAnim></RouterAnim>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
