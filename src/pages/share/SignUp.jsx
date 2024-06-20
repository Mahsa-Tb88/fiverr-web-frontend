import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

export default function SignUp() {
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
        <title>Sign Up</title>
      </Helmet>
      <h1 className=" text-center mb-12  text-4xl mt-20 font-semibold">
        Online Registration Form
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
            <label className="text-white text-xl font-semibold  mb-2 ">
              Full Name
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="text"
              {...register("fullName", {
                required: "You must enter your Full Name",
                minLength: {
                  value: 3,
                  message: "Full Name must be 3 Characters at least",
                },
                maxLength: {
                  value: 10,
                  message: "Full Name must be 10 Characters at most",
                },
              })}
            />
            {errors.fullName && (
              <p classfullName="px-2 py-1 text-white bg-red-800 mt-3 roundedmd">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="text"
              {...register("email", {
                required: "You must enter your email",
                minLength: {
                  value: 3,
                  message: "Email must be 3 Characters at least",
                },
                maxLength: {
                  value: 10,
                  message: "Email must be 10 Characters at most",
                },
              })}
            />
            {errors.email && (
              <p className="px-2 py-1 text-white bg-red-800 mt-3 roundedmd">
                {errors.email.message}
              </p>
            )}
          </div>
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
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2 ">
              Confirm Password
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="password"
              {...register("confirmPassword", {
                required: "You Must Enter Confirm Password",
                validate(value) {
                  if (watch("password") !== value) {
                    return "Confirm Password Is Not Equel To Password";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="bg-red-800 tetx-white px-2 rounded-e-md py-1 mt-3 text-white fs-5">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mb-10">
            <h3 className="text-white text-xl font-semibold  mb-2 ">Role</h3>
            <div className="flex  items-center">
              <div className="mr-10">
                <input
                  type="radio"
                  name="role"
                  className="mr-1 "
                  id="user"
                  {...register("role")}
                />
                <label className="text-white text-lg" htmlFor="user">
                  user
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  className="mr-1 "
                  id="seller"
                  {...register("role")}
                />
                <label className="text-white text-lg" htmlFor="seller">
                  seller
                </label>
              </div>
              {errors.role && (
                <p className="px-2 py-1 text-white bg-red-800 mt-3 rounded-md">
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className=" flex justify-start  items-center">
              <input
                className="me-2 fs-3 input-check"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                {...register("policy")}
              />
              <label
                className="check-label text-white fs-4"
                htmlFor="flexCheckDefault"
              >
                I accept the Terms of Use & Privacy Policy
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
                Sing Up
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
