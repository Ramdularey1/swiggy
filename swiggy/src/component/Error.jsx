import React from "react"
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    const{status,statusText}=err;
    console.log(err)
    return(
        <>
        <h1>OOps's</h1>
        <p>Something went wrong</p>
        <h2>{status +" : " + statusText}</h2>
        </>
    )
}
export default Error;
