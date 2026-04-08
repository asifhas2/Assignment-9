import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Details from "../Compotents/Details";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Compotents/ErrorPage";
import AllProducts from "../Pages/AllProducts";
import Profile from "../Pages/Profile";
import ForgatePassword from "../Pages/ForgatePassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/popular-toys.json"),
        hydrateFallbackElement: (
          <span className="loading loading-ring loading-md"></span>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/Products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
        loader: () => fetch("/popular-toys.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/popular-toys.json"),
        hydrateFallbackElement: (
          <span className="loading loading-ring loading-md"></span>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot",
        Component: ForgatePassword,
      },
      {
        path: "/*",
        Component: ErrorPage,
      }
    ],
  },
]);

export default router;
