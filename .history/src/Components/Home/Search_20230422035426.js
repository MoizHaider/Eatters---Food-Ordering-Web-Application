import classes from "./Search.module.css";
import { userData } from "../../Store/ProfileSlice";
import { useSelector } from "react-redux";
function Search(props) {
  // const user = useSelector(userData);
  // console.log(user);
  return (
    <div className={classes.parent}>
      <div style = >
        <label>Search</label>
        <input
          className={`${classes.searchBar} ${props.className}`}
          onClick={props.inputClickHandler}
          type="text"
          name="HomeSearch"
          placeholder="Hmmm, what's your carvings!"
        />
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
