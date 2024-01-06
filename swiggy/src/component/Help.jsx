import { Outlet } from "react-router-dom";

const Help = () => {
    return (
        <div className="mt-[7rem]">
            <p>help</p>
            <Outlet/>
            <input type="text" />
            

        </div>
    )
}
export default Help;