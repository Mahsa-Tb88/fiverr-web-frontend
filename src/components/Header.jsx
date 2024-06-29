import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../utils/api";
import { userActions } from "../store/slices/userSlice";

export default function Header() {
  const user = useSelector((state) => state.user.userInfo);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const dispatch = useDispatch();
  async function Logout() {
    const result = await logout();
    if (result.success) {
      dispatch(
        userActions.setUser({
          isLoggedIn: false,
          isSeller: false,
          username: "",
          userId: "",
          fullName: "",
          email: "",
        })
      );
    } else {
    }
  }
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
            {user.isLoggedIn ? (
              <div
                className="flex justify-between items-center cursor-pointer "
                // onClick={
                //   isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true)
                // }
                onClick={() =>
                  isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true)
                }
              >
                <p>{user.username}</p>
                <img
                  src="././public/profile.png"
                  className="ml-2 w-9 h-9 rounded-full"
                />
                {isShowMenu && (
                  <div className="bg-slate-100 gap-2 absolute top-14 right-20 flex flex-col text-slate-600 font-semibold px-2 py-3 rounded-md w-44">
                    {user.isSeller && (
                      <div className="flex flex-col gap-2 ">
                        <Link
                          className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                          to="/admin/gigs"
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
                      to="/order"
                    >
                      Orders
                    </Link>
                    <Link
                      className="hover:bg-websiteColor rounded-md w-full py-1 pl-2 hover:text-white"
                      to="/message"
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
