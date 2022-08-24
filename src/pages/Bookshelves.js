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

import Dashboard from "../components/Navigation/Dashboard";
import { Outlet } from "react-router-dom";
import SearchDashboard from "../components/Navigation/SearchDashboard";
import useAuth from "../hook/useAuth";
import SearchDashboardPage from "../components/bookshelf/SearchDashboardPage";
export default function Bookshelves() {
  const { user } = useAuth();
  const { text, mode } = useTheme();
  return (
    <div className=" md:mx-24     justify-start items-center flex-col  gap-28 lg:px-5 px-7 md:px-0 flex-wrap min-h-screen">
      <div className="flex justify-start items-start lg:mb-20 mb-10 ml-5">
        <h1
          className={`text-3xl ${
            mode === "bg-gray-900" ? "text-white" : "text-black"
          }    font-extralight `}
        >
          <span className={`${text}  mr-3 font-medium`}>
            {user && user.displayName}'s
          </span>
          bookshelf
        </h1>
      </div>

      <div
        className="flex flex-wrap gap-24 lg:ml-4 lg:gap-0 lg:justify-center lg:items-start lg:flex-nowrap md:items-center  justify-center flex-col  lg:flex-row
       items-center lg:w-full w-80"
      >
        <div>
          <Dashboard></Dashboard>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="ml-10 lg:ml-0 md:ml-0"
        >
          <Outlet></Outlet>
        </motion.div>
        <div className=" lg:h-72 w-72 h-96 flex flex-col gap-10 overflow-hidden  lg:overflow-visible  mb-5 justify-start items-stretch">
          <SearchDashboard></SearchDashboard>
          <SearchDashboardPage></SearchDashboardPage>
        </div>
      </div>
    </div>
  );
}
