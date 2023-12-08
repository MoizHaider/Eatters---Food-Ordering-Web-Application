import classes from "./FoodItem.module.css";

function FoodItem(props) {
 
  
  function onAddClickHandler(){
    props.multipleFoodHandler(props.id, props.name, props.price);
  }
  
  return (
    <div className={classes.foodItemWrapper}>
      <img src={`${props.src}`} width="50" height="50" alt="Food" />
      <div className={classes.namePriceWrapper}>
        <h5 className={classes.name}>{props.name}</h5>
        <h6 className={classes.price}>Price ${props.price}</h6>
      </div>
      <div className={classes.ratings}>Rat</div>
      <button onClick={onAddClickHandler}>Add to Order</button>
    </div>
  );
}
export default FoodItem;
