import React from "react"
import { useState, useEffect } from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Help from "./Help";
import Profile from "./Profile";
import Error from "./Error";
import Body from "./Body";
import Cart from "./Cart";
import Sign from "./Sign";
import Menu from "./MenuCard";
import RestaurentMenu from "./RestaurentMenu";


const App = () => {

    return (
        <>
            <Navbar />
          
            <Outlet/>

        </>

    )

}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children:[

            {
                path: "",
                element: <Body/>,
                errorElement: <Error />
            },

            {
                path: "/search",
                element: <Search/>,
                errorElement: <Error />
            },
        
            {
                path: "/help",
                element: <Help />,
                errorElement: <Error />,
                children:[{
                    path:"profile",
                    element:<Profile/>
                    
                }]
            },
        
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />
            },
        
            {
                path: "/sign",
                element: <Sign />,
                errorElement: <Error />
            },
            
            {
                path: "/restaurent/:resId",
                element:<RestaurentMenu/>
            }
        

        ]
    },

    

]);

export default App;

