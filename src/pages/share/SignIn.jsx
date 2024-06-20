import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm();
  function onSubmit(data) {}
  return (
    <div className="register  d-flex justify-content-center align-items-center flex-column ">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className=" text-center mb-12  text-4xl mt-20 font-semibold">
        Sign In
      </h1>
      <form
        className="bg-websiteColor rounded-md w-1/2 m-auto py-12 mt-9 mb-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        {failMessage && (
          <div>
            <h2 className="bg-white text-danger rounded-1 mb-10 fs-2 py-3 d-flex justify-content-center align-items-center">
              <MdOutlineError className="error" />
              {failMessage}
            </h2>
          </div>
        )}
        {successMessage && (
          <div>
            <h2 className="bg-white text-success rounded-1 mb-5 fs-3 py-3 px-3  d-flex justify-content-center align-align-items-baseline ">
              <FaCheckCircle className="check" />
              {successMessage}
            </h2>
          </div>
        )}
        <div className="  w-2/3 m-auto mt-11">
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2">
              Username
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="text"
              {...register("username", {
                required: "You must enter your Username",
                minLength: {
                  value: 3,
                  message: "Username must be 3 Characters at least",
                },
                maxLength: {
                  value: 10,
                  message: "Username must be 10 Characters at most",
                },
              })}
            />
            {errors.username && (
              <p className="px-2 py-1 text-white bg-red-800 mt-3 rounded-md">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2 ">
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="password"
              {...register("password", {
                required: "You must enter your Password",
                minLength: {
                  value: 6,
                  message: "Password must be 3 Characters at least",
                },
                maxLength: {
                  value: 10,
                  message: "Password must be 10 Characters at most",
                },
              })}
            />
            {errors.password && (
              <p className="px-2 py-1 bg-red-800 mt-3 text-white rounded-md">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className=" flex justify-start  items-center">
              <input
                className="mr-2 "
                type="checkbox"
                value=""
                id="flexCheckDefault"
                {...register("Remember")}
              />
              <label className=" text-white " htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          </div>
          <div className="mt-10 text-center">
            {isSubmitting ? (
              <button type="submit" className="btn-submit disabled">
                <span className="spinner-grow spinner-spinner-grow-sm"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="bg-white text-websiteColor rounded-md hover:bg-emerald-200 px-5 py-2 font-bold"
              >
                Sing In
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}