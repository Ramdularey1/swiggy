import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { IMG_CDN } from "../utils/constants"
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
import { MdOutlineIncompleteCircle } from "react-icons/md"

const RestaurentMenu = () => {
    const [isActive, setIsActive] = useState(-1);

    const params = useParams();
    const { resId } = params;
    console.log(resId);

    const [menu, setMenu] = useState(null)
    const [categoryFiltered, setCategoryFiltered] = useState([]);


    useEffect(() => {
        getMenu();
    }, []);




    async function getMenu() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8912141&lng=81.0648758&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();

            const menuData = json?.data?.cards[0]?.card?.card?.info
            console.log(json?.data?.cards[0]?.card?.card?.info);

            const Filtered = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (c) =>
                    c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
            setMenu(menuData);
            setCategoryFiltered(Filtered);
            console.log(menu);
        } catch (err) {
            console.log(err);
        }


    }

    const handleClick = (index) => {
        if(index === isActive) {
            setIsActive(-1);
            return;
        }
        setIsActive(index);
    }

    return (!menu) ? <Shimmer /> : (

        <div className=" bg-[#ffff] mt-[10rem] lg:w-8/12 w-11/12 m-auto p-8 flex
         flex-col gap-4">
            <div
                className="flex justify-between bg-[#ffff]" >
                <div>
                    <h1 className="text-xl leading-6 text-[#282c3f] font-bold">{menu.name}</h1>
                    <div className="mt-2 text-[14px]">
                        <h3 className="text-[#7e808c]">{menu.cuisines?.join(", ")}</h3>
                        <h3 className="text-[#7e808c]">{menu.locality}</h3>

                    </div>

                </div>



                <div className="flex border-t-2 border-l-2 border-r-2 border-b-2 justify-center flex-col items border-[#ececef] rounded">
                    <p className="w-[6rem] p-1 font-extrabold text-[16] text-[#0f8a65] flex items-center
                justify-center gap-2  " ><FaStar color="#0f8a65" />{menu.avgRatingString}</p>
                    <p className="border-[1px] w-[90px] m-auto border-[#ececef]"></p>


                    <p className="  p-2  text-sm text-[#7e808c]">{menu.totalRatingsString}</p>
                </div>

            </div>


            <div className="flex flex-col border-dotted border-t-2   border-[#ececef]">
                <div className="flex gap-12 mt-4">
                    <p className="flex gap-2 items-center justify-center font-bold"><MdOutlineIncompleteCircle />30 MINS</p>
                    <p className="font-bold">{menu.costForTwoMessage}</p>
                </div>

                <div className="flex mt-4  gap-2">
                    <div className="w-1/3 p-2 border-t-2 border-l-2 border-r-2 border-b-2 border-[#ececef] ">
                        <p className="font-bold text-[14px]">10% OFF UPTO ₹100</p>
                        <p className=" text-[12px]">NO CODE REQUIRED | ABOVE ₹700</p>

                    </div>
                    <div className="w-1/3 p-2  border-t-2 border-l-2 border-r-2 border-b-2 border-[#ececef]" >
                        <p className="font-bold text-[14px]">FLATE ₹50 OFF</p>
                        <p className=" text-[12px]">NO CODE REQUIRED | ABOVE ₹300</p>
                    </div>
                    <div className="w-1/3 p-2 border-t-2 border-l-2 border-r-2 border-b-2 border-[#ececef]">
                        <p className="font-bold text-[14px]">20% OFF UPTO ₹150</p>
                        <p className=" text-[12px]">USE AMEXFEST | ABOVE ₹700</p>
                    </div>
                </div>
            </div>


            <div>
                {categoryFiltered?.map((c, index) => {
                    return (
                        // Controlled Component
                        <RestaurentCategory
                            key={c?.card?.card?.title}
                            isActive={isActive}
                            handleClick={handleClick}
                            resData={c?.card?.card}
                            index={index}
                            setMyIndex={() => {
                                index === showIndex
                                    ? setShowIndex(null)
                                    : setShowIndex(index);
                            }}
                        />
                    );
                })}
            </div>



        </div>



    )
}
export default RestaurentMenu

//"https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8912141&lng=81.0648758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING