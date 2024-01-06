import {useState} from "react";
import { GrSquare } from "react-icons/gr";
import { IMG_CDN } from "../utils/constants";4

const MenuCard = (props) => {
   

    const { dishData } = props;
    console.log(dishData);
    const { name, price, description, imageId, defaultPrice } =
        dishData?.card?.info;
    
    const [itemCount, setItemCount] = useState(0);


    return (

        <div className="mt-2 w-11/12 lg:w-11/12 m-auto bg-[#ffff] p-4 flex justify-between border-t-2   border-b-2 border-[#ececef]">
            <div className="gap-4 ">

                <p><GrSquare size={"1.5rem"} color={"#0f8a65"} /></p>
                <p className="mt-2 text-base font-bold">{name}</p>
                <p>₹{price / 100 || defaultPrice / 100}</p>
                <p className="mt-4 text-base  text-[#595a61]">{description}</p>
            </div>

            <div className="w-[10rem]  flex justify-center items-center">
                <img className="rounded  object-cover" src={IMG_CDN + imageId} alt="image not found" />
            </div>

        </div>
    )
}
export default MenuCard;