import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { initialize } from "./utils/api";
import { useDispatch } from "react-redux";
import { userActions } from "./store/slices/userSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = setTimeout(initializeApp, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function initializeApp() {
    const result = await initialize();
    console.log(result);
    if (result.success) {
      // dispatch(userActions.setUser())
    }
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
