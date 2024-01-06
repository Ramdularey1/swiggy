import React from "react"
import ReactDOM from "react-dom/client"
import App from "./component/App"
import { appRouter } from "./component/App";
import { RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);