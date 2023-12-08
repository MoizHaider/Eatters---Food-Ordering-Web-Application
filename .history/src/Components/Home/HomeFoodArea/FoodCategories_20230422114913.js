import classes from "./FoodCategories.module.css";
export default function FoodCategories() {
  let categories = [
    "Fast Food",
    "Chinese",
    "Italian",
    "Pakistani",
    "Indian",
    "Vegan",
    "Meat Lovers",
    "Cheese Lovers",
    "Deserts",
  ];
  return (
    <div>
    <h2>Categories</h2>
      <div className={classes.parent}>
        {categories.map((data) => {
          return <button>{data}</button>;
        })}
      </div>
    </div>
  );
}
