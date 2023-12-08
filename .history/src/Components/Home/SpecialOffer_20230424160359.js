
import banner1 from "../../Assets/webBanner1.png"
import classes from "./SpecialOffer.module.css";
function SpecialOffer(){
    return (
        <div className = {classes.bannersContainer}>
            <button ><img src="" alt=""></button>
            <img src={banner1} alt=""/>
            <button type=""><img src="" alt=""></button>
        </div>
    );
}
export default SpecialOffer;