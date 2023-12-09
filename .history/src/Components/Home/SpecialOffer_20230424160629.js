
import banner1 from "../../Assets/webBanner1.png"
import classes from "./SpecialOffer.module.css";
import rightArrow from "../../Assets/rightArrow.png"
import leftArrow from "../../Assets/leftArrow.png"
function SpecialOffer(){
    return (
        div
        <button ><img src={leftArrow} alt=""/></button>
        <div className = {classes.bannersContainer}>
            
            <img src={banner1} alt=""/>
            
        </div>
        <button ><img src={rightArrow} alt=""/></button>
    );
}
export default SpecialOffer;