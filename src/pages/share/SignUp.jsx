import React, { useState } from "react";
import upload from "../../utils/upload";
import newRequest from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function () {
  const [file, setFile] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    country: "",
    isSeller: "",
    desc: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const sellerHandler = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", { ...user, image: url });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  return (
    <div className="w-3/4 mx-auto my-14 ">
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className=" ">
          <h2 className="my-6 text-slate-400 font-semibold text-3xl">
            Create a new account
          </h2>
          <div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Username</label>
              <input
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                name="username"
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Email</label>
              <input
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                name="email"
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Password</label>
              <input
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                email="password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Profile Image</label>
              <input
                type="file"
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Country</label>
              <input
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                name="country"
                onChange={changeHandler}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-emerald-600 text-lg text-white w-2/3 py-2 rounded-sm my-8 font-semibold hover:bg-emerald-700"
          >
            Register
          </button>
        </div>
        <div className="">
          <h2 className="my-6 text-slate-400 font-semibold text-3xl">
            I want to become seller
          </h2>
          <div>
            <div className="mb-6">
              <label className="text-gray-500 ">
                Activate to become seller
              </label>
              <input
                type="checkbox"
                className="ml-3"
                onChange={sellerHandler}
              />
            </div>

            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">phone Number</label>
              <input
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                name="phone"
              />
            </div>
            <div className="flex justify-center items-start flex-col mb-6">
              <label className="text-gray-500 mb-2">Description</label>
              <textarea
                className="w-2/3 border border-slate-400 px-2 py-1 rounded-sm"
                cols="30"
                rows="10"
                onChange={changeHandler}
                name="desc"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
