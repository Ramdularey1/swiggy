import react from "react";

const Shimmer = ()=>{
    return(
        <div className='bg-[#ffff] mt-36 py-8 w-10/12 m-auto flex flex-wrap items-center justify-center  gap-6'>
            {
                Array(9).fill("").map((e,index)=>(
                    <div key = {index} className='bg-[#ffff] animate-pulse  h-[330px] w-[254px] ml-1 text-[14px] items-start rounded-md '>
                    <div className='[278] h-[200]  rounded-lg object-cover bg-gray-200' href="#"></div>
                    <div className='ml-2 mt-2  leading-5  tracking-tight '>
                        <p className='font-bold text-lg text-[#02060c]  mt-3  bg-gray-200 w-[12rem] h-[1.5rem]'></p>
                        <p className='font-bold text-lg text-[#02060c] mt-3 flex items-center gap-2 w-[8rem] h-[1.5rem] bg-gray-200'></p>

                        <p className='text-base text-[#595a61] mt-3 w-[10rem] h-[1.5rem]  bg-gray-200'></p>

                    </div>

                </div>
                ))
            }
        </div>
    )
}

export default Shimmer;