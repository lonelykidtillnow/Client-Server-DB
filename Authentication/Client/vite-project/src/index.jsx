import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Register from "./register";
import Login from "./login";
import Welcome from "./welcome";

const Display=createBrowserRouter([
    {
        path:"/",
        element:<Register />
    },
    {
        path:'/register',
        element:<Register />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
      path:'/welcome',
      element:<Welcome />  
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={Display}/>)