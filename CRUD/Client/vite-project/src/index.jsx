import React from "react";
import ReactDOM from "react-dom/client"
//Routing
import {createBrowserRouter,RouterProvider} from "react-router-dom"
//Fetch All Details
import Fetch from "./details";
//Fetch Details By ID
import Fetchid from "./singledetails";
//Create Details
import Create from "./createdetails";
//Update Details
import Update from "./updatedetails";


const Display=createBrowserRouter([
    {
        path:'/',
        element:<Fetch />
    },
    {
        path:'/:id',
        element:<Fetchid />
    },
    {
        path:"/create",
        element:<Create />
    },
    {
        path:"/update",
        element:<Update />
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Display}/>)
