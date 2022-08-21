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
    <div className=" md:mx-24   justify-center items-center flex-col  gap-28  px-5  min-h-screen">
      <div className="mb-20">
        <h1 className={`text-3xl   font-extralight `}>
          <span className={`${text}  mr-3 font-medium`}>
            {user && user.displayName}'s
          </span>
          bookshelf
        </h1>
      </div>

      <div className="flex  justify-around items-start w-full">
        <div>
          <Dashboard></Dashboard>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet></Outlet>
        </motion.div>
        <div className=" h-72 flex flex-col gap-10  justify-start items-stretch">
          <SearchDashboard></SearchDashboard>
          <SearchDashboardPage></SearchDashboardPage>
        </div>
      </div>
    </div>
  );
}
