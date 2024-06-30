import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function AuthGoogle() {
  return (
    <div>
      <button className="bg-white py-2 w-full rounded-md outline-0 flex justify-center items-center hover:bg-emerald-100">
        <FcGoogle className="mr-2 text-lg" />
        <span className="text-websiteColor font-semibold">
          Continue With Google
        </span>
      </button>
    </div>
  );
}
