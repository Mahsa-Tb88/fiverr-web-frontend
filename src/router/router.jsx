import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/share/SignIn";
import SignUp from "../pages/share/SignUp";
import Orders from "../pages/Orders";
import Messages from "../pages/Messages";
import Gigs from "../pages/Gigs";
import Gig from "../pages/share/Gig";
import Message from "../pages/Message";
import Pay from "../pages/Pay";
import Success from "../pages/Success";
import MyGigs from "../pages/MyGigs";
import Add from "../pages/Add";
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
      { path: "message/:id", element: <Message /> },
      { path: "gigs", element: <Gigs /> },
      { path: "myGigs", element: <MyGigs /> },
      { path: "gig/:id", element: <Gig /> },
      { path: "pay/:id", element: <Pay /> },
      { path: "success", element: <Success /> },
      { path: "add", element: <Add /> },
    ],
  },
]);

export default router;
