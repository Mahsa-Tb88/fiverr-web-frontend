import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/share/SignIn";
import SignUp from "../pages/share/SignUp";
import Orders from "../pages/Orders";
import Messages from "../pages/Messages";
import Gigs from "../pages/Gigs";
import Gig from "../pages/share/Gig";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <SignIn /> },
      { path: "Register", element: <SignUp /> },
      { path: "orders", element: <Orders /> },
      { path: "messages", element: <Messages /> },
      { path: "gigs", element: <Gigs /> },
      { path: "gig/:id", element: <Gig /> },
    ],
  },
]);

export default router;
