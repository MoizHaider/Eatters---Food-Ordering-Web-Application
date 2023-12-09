
import banner1 from "../../Assets/webBanner1.png"
import classes from "./SpecialOffer.module.css";
function SpecialOffer(){
    return (
        <div className = classes.bannersContainer>
            <img src={banner1} alt=""/>
            <div>img2</div>
            <div>img3</div>
        </div>
    );
}
export default SpecialOffer;