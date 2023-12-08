import classes from "./FoodItem.module.css";

function FoodItem(props) {
 
  
  function onAddClickHandler(){
    props.multipleFoodHandler(props.id, props.name, props.price);
  }
  
  return (
    <div className={classes.foodItemWrapper}>
      <div className={classes.imageContainer}>
      <img src={`${props.src}`} width="50" height="50" alt="Food" />
      </div>
      <h5 className={classes.name}>{props.name}</h5>
      <div className={classes.priceRatingContainer}>
        <h6 className={classes.price}>${props.price}</h6>
        <div className={classes.ratings}>rating</div>
      </div>
      <div>
      <button onClick={onAddClickHandler}>Add to Order</button>
      </div>
      
    </div>
  );
}
export default FoodItem;
