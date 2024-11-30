import { createBrowserRouter } from "react-router-dom";
import NewUser from "../Components/NewUser";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
    ],
  },
]);

export default router;
