import swiggyLogo from '../asset/swiggy.png';
const Sign = () => {
    return (
        <div className=" mt-[10rem] flex w-11/12 h-[528px] m-auto">
            <div className="
            bg-blue-800 w-1/2 flex flex-col">
                <div className="p-12 h-1/2 ">
                    <h1 className=" text-[28px] text-[#ffffff] font-bold">Login</h1>
                    <p className=" text-[18px] text-[#dbdbdb]">Get access to your Orders, </p>
                    <p className=" text-[18px] text-[#dbdbdb]">Wishlist and Recommendations</p>
                </div>

                <div className="flex  h-1/2 justify-center items-center">
                    <img className='w-[200px] h-[200px]' src={swiggyLogo} alt="no image found" />
                </div>
            </div>
            <div className="
              w-1/2">
                <input className='px-4 text-[18px] mt-12 ml-4 w-11/12 h-10 border-b-2 border-[#7676ec] outline-none' type="search" placeholder='Enter Email/Mobile Number' />
                <p className='mt-8 ml-4'>By continuing, you agree to Flipkart's <span className='text-blue-600'>Terms of Use</span> and <span className='text-blue-600'>Privacy Policy.</span></p>

                <button className='mt-4 bg-orange-600 w-11/12 ml-4 h-10 rounded p-2 cursor-pointer text-[#ffff]'>Request OTP</button>
                <div className='absolute bottom-6 ml-4 w-[330px]
                  text-center'>
                    <p>New to Swiggy? <span  className='cursor-pointer text-orange-600 font-bold'>Create an account</span></p>
                </div>

            </div>
        </div>
    )
}
export default Sign;