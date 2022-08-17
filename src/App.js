import "./App.css";
import React, { useState } from "react";

import NavBar from "./components/Navigation/NavBar";
import { Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import useTheme from "./hook/useTheme";
import Modal from "./components/Themes/Modal";
import RouterAnim from "./routers/RouterAnim";
import useAuth from "./hook/useAuth";
import ModalWarning from "./components/modalWarning/ModalWarning";
import useCollection from "./hook/useCollection";
import "leaflet/dist/leaflet.css";
function App() {
  const { checkAuth } = useAuth();
  const { mode, warningModal } = useTheme();
  const [modal, setModal] = useState(false);
  const { user } = useAuth();

  return (
    <div className={`App ${mode}  `}>
      {modal && <Modal setModal={setModal}></Modal>}
      {warningModal && <ModalWarning></ModalWarning>}
      {checkAuth && (
        <div
          className={`  ${
            modal ? "blur-[2px] " : warningModal ? "blur-[2px]" : "blur-none"
          }  `}
        >
          <NavBar setModal={setModal}></NavBar>

          <div className="md:mx-10   py-5">
            <RouterAnim></RouterAnim>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default App;
