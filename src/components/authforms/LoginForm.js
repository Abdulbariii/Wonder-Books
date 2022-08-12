import React from "react";
import useTheme from "../../hook/useTheme";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import useLogin from "../../hook/useLogin";
export default function LoginForm() {
  const { mode, color, text } = useTheme();
  const { login, isPending, error } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  const [Hidepassword, setHidePassword] = useState("password");
  return (
    <div>
      <div className="flex justify-center text-red-500 items-center gap-5 md:w-96 w-80 text-7xl">
        <ion-icon name="warning-outline"></ion-icon>
        <h1
          className={`text-sm ${
            mode === "bg-gray-900"
              ? "text-gray-50 text-opacity-95"
              : "text-gray-900 "
          } underline decoration-clone decoration-red-500`}
        >
          {" "}
          Please! To use the bookshelf feature you first have to login then you
          will have the ability to create and manage bookshelves
        </h1>
      </div>

      <h1 className={`text-7xl ${text}  mb-10 font-light`}>
        Login
        <br />{" "}
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col ${color} bg-opacity-30 gap-10 justify-center items-start p-5 md:w-96 w-80 rounded-2xl`}
      >
        <label htmlFor="email" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            email
          </span>
          <input
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type={"email"}
            placeholder="Email"
            className="w-72 md:w-80 h-10 rounded-2xl p-5"
          ></input>
        </label>
        <label htmlFor="password" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            password
          </span>
          <input
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type={Hidepassword}
            placeholder="Password"
            className="w-72 md:w-80  h-10 rounded-2xl p-5"
          ></input>
          <label className="flex gap-5 py-2 items-center justify-start ml-5">
            <input
              onChange={() => {
                setHidePassword(Hidepassword === "text" ? "password" : "text");
              }}
              type={"checkbox"}
              className="text-4xl scale-150 "
            ></input>
            <span
              className={`text-sm  font-light ${
                mode === "bg-gray-900"
                  ? "text-gray-50 text-opacity-95"
                  : "text-gray-900 text-opacity-80"
              }`}
            >
              Show passowrd
            </span>
          </label>
        </label>
        {error && <h1 className="text-sm font-light">{error}</h1>}
        {!isPending && (
          <button
            type="sumbit"
            className={`w-72 md:w-80  text-xl flex justify-center items-center h-10 ${color} rounded-2xl`}
          >
            Login
          </button>
        )}
        {isPending && (
          <button
            disabled
            type="sumbit"
            className={`w-72 md:w-80 text-xl flex justify-center items-center h-10 ${color} rounded-2xl`}
          >
            Loading...
          </button>
        )}
        <Link
          to="/signup"
          className={`text-lg ${text} underline decoration-solid  decoration-slice`}
        >
          Don't have an account? create one
        </Link>
      </form>
    </div>
  );
}
