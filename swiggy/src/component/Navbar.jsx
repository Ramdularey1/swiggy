import React from "react";
import { useState, useEffect } from "react";
import swiggyLogo from '../asset/swiggy.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    const [setValue, changeValue] = useState(false);

    const handleChange = () => {
        console.log("handleChange")
        changeValue((prevValue) => !prevValue);
    }

    // Reset the state when the screen size changes
    const handleResize = () => {
        console.log("useeffect")
        if (window.innerWidth >= 1022) {
            
            changeValue(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <header className="bg-[#ffffff] z-30 shadow-md text-[#282c3f] leading-4 text-[14px] fixed top-0 left-0 right-0 h-[5.5rem]">
            <nav className="flex items-center justify-between px-12 h-16 gap-8 mr-20 ml-20 mt-[10px] sm:gap-20">
             
                <Link to ="/">
                <img className="h-16 " src={swiggyLogo} alt="image not found" />
                </Link>


                <div className={`absolute ${setValue ? 'top-24' : 'top-[-300px]'} right-[0] max-lg:bg-[#ffff] max-lg:top-100
                 max-lg:shadow-md max-lg:rounded-md  max-lg:w-[150px] max-lg:right-[10] flex flex-col gap-6 items-center py-2 
                 text-lg font-bold lg:static lg:flex-row justify-between`}>

                    <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">


                    </ul>

                    <div>


                        <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ">
                           
                            <Link to ="/search">
                            <li className="hover:text-[#fc8019] text-base flex gap-4"><IoIosSearch size={"1.5rem"} />Search</li>
                            </Link>
                            <Link to ="/help">
                            <li className="hover:text-[#fc8019] text-base flex gap-4"><IoHelpBuoyOutline size={"1.5rem"} />Help</li></Link>      
                            
                             <Link to ="sign">
                             <li className="hover:text-[#fc8019] text-base flex gap-4"><AiOutlineUser size={"1.5rem"} />Sign In</li></Link>
                            
                            <Link to ="/cart">
                            <li className="hover:text-[#fc8019] text-base flex gap-4"><IoCartOutline size={"1.5rem"} />Cart</li>
                            </Link>
                        </ul>





                    </div>
                </div>

                <div className="lg:hidden ">
                    <RxHamburgerMenu onClick={handleChange} size={"2rem"} />
                </div>


            </nav>
        </header>
    )
}
export default Navbar

{/* <a href="#"><img className="h-16" src={swiggyLogo} alt="gg" /></a> */ }