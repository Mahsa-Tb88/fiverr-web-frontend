import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./utils/golobalConstants.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
