import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/api";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const navigate = useNavigate();
  async function Logout() {
    try {
      await newRequest.post("/auth/logOut");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="bg-websiteColor text-white relative">
      <div className="max-w-5xl flex justify-between items-center m-auto h-20 ">
        <Link className="font-bold text-lg" to="/">
          FIVERR.
        </Link>
        <div>
          <nav className="flex justify-between items-center gap-5">
            <Link
              className="font-semibold hover:bg-white text-lg hover:text-websiteColor rounded-md px-2 py-1 "
              to=""
            >
              Fiverr Business
            </Link>
            <Link
              className="font-semibold hover:bg-white text-lg hover:text-websiteColor rounded-md px-2 py-1 "
              to=""
            >
              Explore
            </Link>
            <Link
              className="font-semibold hover:bg-white text-lg hover:text-websiteColor rounded-md px-2 py-1 "
              to=""
            >
              English
            </Link>
            {currentUser ? (
              <div
                className="flex justify-between items-center cursor-pointer "
                onClick={() =>
                  isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true)
                }
              >
                <p>{currentUser.username}</p>
                <img
                  src={currentUser.image || "././public/profile.png"}
                  className="ml-2 w-9 h-9 rounded-full"
                />
                {isShowMenu && (
                  <div className="bg-slate-100 gap-2 absolute top-14 right-20 flex flex-col text-slate-600 font-semibold px-2 py-3 rounded-md w-44">
                    {currentUser.isSeller && (
                      <div className="flex flex-col gap-2 ">
                        <Link
                          className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                          to="/myGigs"
                        >
                          Gigs
                        </Link>
                        <Link
                          className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                          to="/admin/newGig"
                        >
                          Add new gig
                        </Link>
                      </div>
                    )}

                    <Link
                      className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                      to="/orders"
                    >
                      Orders
                    </Link>
                    <Link
                      className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                      to="/messages"
                    >
                      Messages
                    </Link>
                    <div
                      className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                      onClick={() => Logout()}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Link
                  className="font-semibold hover:bg-white text-lg hover:text-websiteColor rounded-md px-2 py-1 mr-3 "
                  to="Login"
                >
                  Sign in
                </Link>
                <Link
                  className="font-semibold hover:bg-white text-lg hover:text-websiteColor rounded-md px-4 py-1 border  "
                  to="Register"
                >
                  Join
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
