import pizza from '../asset/pizza.avif';
import { IMG_CDN } from "../utils/constants";
const PopularCuisines =(props) =>{
    console.log('hh');
    const{imgId} = props.data;
    console.log(imgId)
    return(
       
                <img className="ml-4 h-[40px] w-[40px] rounded-full" src={IMG_CDN + imgId} alt="image not found"  />
           
    )
   

}
export default PopularCuisines;