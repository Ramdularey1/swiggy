import react, { useState } from "react"
import MenuCard from "./MenuCard";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const RestaurentCategory = (props) => {
  
  const {index, vegOption, resData, showItems, handleClick, isActive, setMyIndex } = props;
  const { title, itemCards } = resData;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (vegOption === true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  console.log(filteredVegItems)

  if (filteredVegItems.length === 0) {
    return;
  }


  return (
    <>
      <div className=" w-11/12 lg:w-11/12 m-auto">
        <div onClick={() => {handleClick(index)}} className=" border-b-8 border-[#ececed] flex justify-between">
        <button ><p className="mt-6 text-[18.2px] ml-1 font-bold pl-2 mb-2">{title}</p></button>
         <div className="mt-6">{isActive === index?<p><GoChevronDown size={"1.5rem"}/></p>:<p><GoChevronUp size={"1.5rem"}/></p>}</div>
        </div>
        
                                   
        {
          isActive === index && filteredVegItems?.map((dish) => {
            console.log(dish);
            return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
          })}
      </div>
    </>

  )
}
export default RestaurentCategory