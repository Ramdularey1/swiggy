import React, { useEffect } from "react";
import { useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import { IoSearchOutline } from "react-icons/io5";
import swiggyLogo from '../asset/swiggy.png';
import PopularCuisines from "./PopularCuisines";

const Search = () => {

    const[popularCuisines,setPopularCuisines] = useState([]);

    useEffect(()=>{
        Cuisines();
    },[]);

    async function Cuisines(){
        try{
            const data = await fetch(SWIGGY_API_URL)
            const jsonData = await data.json();
            console.log(jsonData);
            const CuisinesImage =
                jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
                    (restaurant) => {
                        console.log(restaurant?.info?.cloudinaryImageId);
                        return {
                            
                            imgId: restaurant?.info?.cloudinaryImageId,
                           
                        };
                    }
                );
                setPopularCuisines(CuisinesImage);
               
                console.log(CuisinesImage);
        }catch(err){
            console.log(err);
        }
    }


    return (
      
        <div className="mt-32  w-9/12 py-4 h-[100%] flex justify-center items-center m-auto md:w-8/12 flex-col">
            <div className="w-11/12 flex">
            <input  type="search" placeholder="Search for restaurents and food" className="outline-none p-6 text-xl text-[#393232] px-8  w-11/12 h-[40px] border-solid border-t-2 border-[#9e9e9e] border-b-2 border-l-2" />
            <div className="border-t-2  border-b-2 border-r-2 border-[#9e9e9e] flex h-[51px] justify-center items-center
            "><IoSearchOutline 
            size={"2rem"} color="#9e9e9e"/></div>

            </div>
           
            <div className=" p-4 border-t-8 border-[#ececef] w-11/12 mt-8 text-[20px] text-[#3d4152] ">
            <h1 className=" text-start font-extrabold">Popular Cuisines</h1>
            </div>
            <div className=" mt-[-10px]  py-4   w-11/12 p-3 border-b-8 border-[#ececef] flex">
            {popularCuisines?.map((data,index)=>{
                return(
                    <PopularCuisines
                    data ={data}
                    key = {index}
                    />
                )
            })}
            
            </div>
        </div>
        
       
        
    )
}
export default Search;