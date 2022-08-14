import React, { useState } from "react";

import useTheme from "../../hook/useTheme";
import * as Yup from "yup";
import { useFormik } from "formik";
import useSignUp from "../../hook/useSignUp";
import useAuth from "../../hook/useAuth";
export default function SignUpForm() {
  const { mode, color, text } = useTheme();
  const { signUp, error, isPending } = useSignUp();
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signUp(values.email, values.password, values.displayName);

      console.log(user);
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  const [Hidepassword, setHidePassword] = useState("password");
  return (
    <div>
      <h1 className={`text-7xl ${text}  mb-10 font-light`}>Sign up</h1>
      <form
        onSubmit={formik.handleSubmit}
        className={`flex flex-col ${color} bg-opacity-30 gap-10 justify-center items-start p-5 md:w-96 w-80 rounded-2xl`}
      >
        <label htmlFor="displayName" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            Name
          </span>
          <input
            id="displayName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.displayName}
            type={"text"}
            placeholder="Name"
            className="w-72 md:w-80 h-10 rounded-2xl p-5"
          ></input>
          {formik.touched.displayName && formik.errors.displayName && (
            <h1 className="text-red-700">{formik.errors.displayName}</h1>
          )}
        </label>

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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            type={"email"}
            placeholder="Email"
            className="w-72 md:w-80 h-10 rounded-2xl p-5"
          ></input>
          {formik.touched.email && formik.errors.email && (
            <h1 className="text-red-700">{formik.errors.email}</h1>
          )}
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
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            type={Hidepassword}
            placeholder="Password"
            className="w-72 md:w-80 h-10 rounded-2xl p-5"
          ></input>
          {formik.touched.password && formik.errors.password && (
            <h1 className="text-red-700">{formik.errors.password}</h1>
          )}
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

        {error && <h1 className="text-lg font-light text-red-500">{error}</h1>}
        {!isPending && (
          <button
            type="sumbit"
            className={`w-72 md:w-80 text-xl flex justify-center items-center h-10 ${color} rounded-2xl`}
          >
            Sign Up
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
      </form>
    </div>
  );
}
