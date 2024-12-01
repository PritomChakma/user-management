import { createBrowserRouter } from "react-router-dom";
import NewUser from "../Components/NewUser";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import User from "../Pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/newuser",
        element: <NewUser></NewUser>,
      },
      {
        path: "/users",
        element: <User></User>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

export default router;
