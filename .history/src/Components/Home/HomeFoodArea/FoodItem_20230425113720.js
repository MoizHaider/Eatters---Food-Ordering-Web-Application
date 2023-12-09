import classes from "./FoodItem.module.css";

function FoodItem(props) {
 
  
  function onAddClickHandler(){
    props.multipleFoodHandler(props.id, props.name, props.price);
  }
  
  return (
    <div className={classes.foodItemWrapper}>
      <img src={`${props.src}`} width="50" height="50" alt="Food" />
      <div className={classes.namePriceWrapper}>

        <h6 className={classes.price}>${props.price}</h6>
        <div className={classes.ratings}>rating</div>
      </div>
      <button onClick={onAddClickHandler}>Add to Order</button>
    </div>
  );
}
export default FoodItem;
