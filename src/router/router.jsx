import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/share/SignIn";
import SignUp from "../pages/share/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <SignIn /> },
      { path: "Register", element: <SignUp /> },
    ],
  },
]);

export default router;
