
import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { MdStars } from "react-icons/md";
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { cuisines, id, imgId, location, name, rating } = props.data;
    // console.log(props.data);

    return (
        <>

            <Link to={"restaurent/" + id}>
            <div className='bg-[#ffff] h-[330px] w-[254px] ml-1 text-[14px] items-start rounded-md    hover:scale-[.9] transition-all '>
                <img className='w-[278] h-[200] rounded-lg object-cover' src={IMG_CDN + imgId} alt="image not found" />
                <div className='ml-2 mt-2  leading-5  tracking-tight '>
                    <p className='font-bold text-lg text-[#02060c] '>{name}</p>
                    <p className='font-bold text-lg text-[#02060c] flex items-center gap-2'><MdStars color='green' />{rating}</p>
                    <p className='truncate text-base  text-[#595a61]'>{cuisines.join(", ")}</p>
                    <p className='text-base text-[#595a61] '>{location}</p>

                </div>

            </div>
            </Link>

            {/* </div> */}
        </>
    )
}

export default RestaurantCard;



{/* <div className=' mt-8  p-4   m-auto   mb-2 text-2xl text-[#02060c] leading-6 font-bold flex items-center justify-center'>
<p className='text-nowrap md:ml-8 '>Restaurants with online food delivery in Lucknow</p>


</div> */}