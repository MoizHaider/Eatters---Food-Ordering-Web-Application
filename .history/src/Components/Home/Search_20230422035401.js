
import classes from "./Search.module.css";
import { userData} from "../../Store/ProfileSlice";
import { useSelector } from "react-redux";
function Search(props) {
  // const user = useSelector(userData);
  // console.log(user);
  return (
    <div className= {classes.parent}>
      <div>
        
      </div>
      
      {props.showModel && (
        <div className={classes.searchModel}>
          <h4>Popular Searches</h4>
          <div>Mapped searches</div>
          <button type="submit" onClick={props.backBtnHandler}>
            Back Icon
          </button>
        </div>
      )}
    </div>
  );
}
export default Search;
