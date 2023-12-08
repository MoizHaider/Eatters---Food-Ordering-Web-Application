import HomeProfile from "./HomeProfile";
import Search from "./Search";
import SpecialOffer from "./SpecialOffer";
import FoodCategories from "./HomeFoodArea/FoodCategories";
import AllFoodItems from "./HomeFoodArea/AllFoodItems";
import { useParams } from "react-router";
import classes from "./Home.module.css";
import { createPortal } from "react-dom";
function Home(props) {
  let content;
  const params = useParams();
  console.log(params);

  if (props.searchModel === false) {
    content = (
      <div>
        <div className={classes.searchPlusProfile}>
          <HomeProfile className={classes.profile} />
          <Search
            showModel={props.searchModel}
            backBtnHandler={props.searchBackBtnClickHandler}
            inputClickHandler={props.onSearchClickHandler}
            className={classes.search}
          />
        </div>

        <SpecialOffer />
        <></>
        <AllFoodItems />
      </div>
    );
  } else
    content = (
      <Search
        showModel={props.searchModel}
        backBtnHandler={props.searchBackBtnClickHandler}
        inputClickHandler={props.onSearchClickHandler}
      />
    );
  return createPortal(content, document.getElementById("searchModel-root"));
}

export default Home;
