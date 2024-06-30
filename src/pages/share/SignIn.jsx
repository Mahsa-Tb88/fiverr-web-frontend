import React, { useState } from "react";
import AuthGoogle from "../../components/AuthGoogle";
import newRequest from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="register  d-flex justify-content-center align-items-center flex-column ">
      <h1 className=" text-center mb-12  text-4xl mt-20 font-semibold">
        Sign In
      </h1>
      <form
        onSubmit={handelSubmit}
        className="bg-websiteColor rounded-md w-1/2 m-auto py-12 mt-9 mb-14"
      >
        <div className="  w-2/3 m-auto mt-11">
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2">
              Username
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" mb-10 flex flex-col justify-center items-start">
            <label className="text-white text-xl font-semibold  mb-2 ">
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md py-1 px-2 text-lg w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <div className=" flex justify-start  items-center">
              <input
                className="mr-2 "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className=" text-white " htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          </div>
          <div className="mt-10 text-center">
            <div>
              <button
                type="submit"
                className="bg-white text-websiteColor rounded-md hover:bg-emerald-100 px-5 py-2 font-bold w-full"
              >
                Sing In
              </button>
              <div className="flex justify-center items-center my-7">
                <span className="w-full h-px bg-slate-300 opacity-50"></span>
                <span className="mx-2 text-gray-300 opacity-50">or</span>
                <span className="w-full h-px bg-slate-300 opacity-50"></span>
              </div>
              <AuthGoogle />
            </div>
          </div>
          {error & error}
        </div>
      </form>
    </div>
  );
}
