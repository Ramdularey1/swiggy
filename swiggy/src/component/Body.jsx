import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnline from "../utils/useOnline";




const Body = () => {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        getitems();
    }, []);

    async function getitems() {
        try {
            const data = await fetch(SWIGGY_API_URL);
            const jsonData = await data.json();


            const restaurantData =
                jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
                    (restaurant) => {
                        return {
                            id: restaurant?.info?.id,
                            name: restaurant?.info?.name,
                            imgId: restaurant?.info?.cloudinaryImageId,
                            rating: restaurant?.info?.avgRating,
                            cuisines: restaurant?.info?.cuisines,
                            location: restaurant?.info?.locality,
                        };
                    }
                );
            console.log(restaurantData);
            setRestaurantData(restaurantData);


        } catch (err) {
            console.log(err)
        }
    }



    const isOnline = useOnline();
    if(!isOnline){
        return <h1 className="mt-[8rem]">you are offline</h1>
    }



    return (
        <>
            {restaurantData?.length === 0 ? (<Shimmer />) : <div className='bg-[#ffff] mt-36 py-8 w-10/12 m-auto flex flex-wrap items-center justify-center gap-6'>
                {
                    restaurantData?.map((data, index) => {
                        return (

                            <RestaurantCard data={data} key={index} />

                        )
                    })
                }
            </div>}
        </>

    )
}

export default Body;