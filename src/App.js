import "./App.css";
import React, { useState } from "react";
import Library from "./pages/Library";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import useTheme from "./hook/useTheme";
import Modal from "./components/Themes/Modal";
import ThemeButton from "./components/Themes/ThemeButton";
function App() {
  const { mode } = useTheme();
  const [modal, setModal] = useState(false);
  return (
    <div className={`App ${mode}  `}>
      {modal && <Modal setModal={setModal}></Modal>}
      <div className={`blur-sm  ${modal ? "blur-sm " : "blur-none"}`}>
        <NavBar setModal={setModal}></NavBar>

        <div className="mx-10   py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
