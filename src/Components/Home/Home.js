import HomeTop from "./HomeTop";
import SpecialOffer from "./SpecialOffer";
import FoodCategories from "./HomeFoodArea/FoodCategories";
import AllFoodItems from "./HomeFoodArea/AllFoodItems";
import { useParams } from "react-router";
import { useState } from "react";

function Home(props) {
  const [category, setCategory] = useState("all");
  return (
    <div className="">
      <HomeTop />
      <div className="px-4 md:px-8">
        <SpecialOffer />
        <FoodCategories
          category={category}
          setCategory={setCategory}
        ></FoodCategories>
      </div>
      <AllFoodItems category={category} />
    </div>
  );
}

export default Home;
