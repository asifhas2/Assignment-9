import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Details from "../Compotents/Details";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
            loader:()=>fetch('/popular-toys.json'),
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        },
         {
    path:'/details/:id',
    Component:Details,
    loader:()=>fetch('/popular-toys.json')
  }
    ]
  },
 
]);

export default router;