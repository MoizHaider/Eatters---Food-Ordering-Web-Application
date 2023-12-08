
import banner1 from "../../Assets/webBanner1.png"
import classes from "./SpecialOffer.module.css";
import rightArrow from "../../Assets/rightArrow.png"
import leftArrow from "../../Assets"
function SpecialOffer(){
    return (
        <div className = {classes.bannersContainer}>
            <button ><img src="" alt=""/></button>
            <img src={banner1} alt=""/>
            <button ><img src="" alt=""/></button>
        </div>
    );
}
export default SpecialOffer;