import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function Home() {
  return (
    <div>
      <div className="bg-websiteColor ">
        <div className="max-w-5xl m-auto flex justify-between items-center">
          <div className="text-white">
            <p className="text-4xl font-semibold ">
              Find the perfect <em>freelance</em> services
              <br /> for your business
            </p>
            <div className="flex justify-between items-center mt-8 border border-transparent overflow-hidden  rounded-md ">
              <div className="flex justify-between items-center w-full bg-white">
                <IoSearchOutline className="text-slate-900 mx-2 font-semibold " />
                <input className="py-2 w-full border-none outline-none text-slate-700" />
              </div>
              <button className="px-3 bg-green-500 py-2 hover:bg-green-700">
                Search
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Popular:</p>
              <div>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Web Design
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Frontend
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Backend
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Logo Design
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="././public/woman.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
