import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import AuthGoogle from "../../components/public/AuthGoogle";
import { registerUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
export default function SignUp() {
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const clearSwitch = useRef(null);

  useEffect(() => {
    // if (userIsLoggedIn) {
    //   navigate("/panel");
    // }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    return () => clearTimeout(clearSwitch.current);
  }, []);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    console.log(data);
    const user = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      username: data.username,
      isSeller: data.role == "seller",
    };
    const result = await registerUser(user);

    if (result.success) {
      setSuccessMessage(
        "Congratulations, your account has been successfully created."
      );
      setFailMessage("");
      clearSwitch.current = setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setFailMessage(result.message);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }
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
            <h2 className="bg-white text-red-700 rounded-md mb-10  mx-5 py-3 flex justify-center items-center">
              <MdOutlineError />
              {failMessage}
            </h2>
          </div>
        )}
        {successMessage && (
          <div>
            <h2 className="bg-white text-green-700 rounded-md mb-5 mx-5 py-3 px-3  flex justify-center items-center ">
              <FaCheckCircle />
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
                  value: 8,
                  message: "Full Name must be 8 Characters at least",
                },
                maxLength: {
                  value: 20,
                  message: "Full Name must be 20 Characters at most",
                },
              })}
            />
            {errors.fullName && (
              <p className="px-2 py-1 text-white bg-red-800 mt-3 rounded-md">
                {errors.fullName.message}
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
                  value: 30,
                  message: "Email must be 30 Characters at most",
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
                  message: "Password must be 6 Characters at least",
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
                  value="user"
                  className="mr-1 "
                  id="user"
                  {...register("role", {
                    value: true,
                    message: "Please select your role",
                  })}
                />
                <label className="text-white text-lg" htmlFor="user">
                  user
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="seller"
                  className="mr-1 "
                  id="seller"
                  {...register("role", {
                    value: true,
                    message: "Please select your role",
                  })}
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
                {...register("policy", {
                  required: "You should accept the terms and conditions",
                })}
              />
              <label
                className="check-label text-white fs-4"
                htmlFor="flexCheckDefault"
              >
                I accept the Terms of Use & Privacy Policy
              </label>
            </div>
            {errors.policy && (
              <p className="px-2 py-1 text-white bg-red-800 mt-3 rounded-md">
                {errors.policy.message}
              </p>
            )}
          </div>
          <div className="mt-10 text-center">
            {isSubmitting ? (
              <button type="submit" className="btn-submit disabled">
                <span className="bg-white w-full text-websiteColor rounded-md opacity-50 px-5 py-2 font-bold">
                  Sing Up
                </span>
              </button>
            ) : (
              <div>
                <button
                  type="submit"
                  className="bg-white w-full text-websiteColor rounded-md hover:bg-emerald-100 px-5 py-2 font-bold"
                >
                  Sing Up
                </button>
                <div className="flex justify-center items-center my-7">
                  <span className="w-full h-px bg-slate-300 opacity-50"></span>
                  <span className="mx-2 text-gray-300 opacity-50">or</span>
                  <span className="w-full h-px bg-slate-300 opacity-50"></span>
                </div>
                <AuthGoogle />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
