import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/api";

export default function Success() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/order");
        }, 5000);
      } catch (err) {}
    };
    makeRequest();
  }, []);

  return (
    <div className="py-11 bg-emerald-600 text-wite ">
      <span>
        Payment successful. Success, You are being redirected to the order page.
        please do not close the page
      </span>
    </div>
  );
}
