import FoodItem from "./FoodItem";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getOrders,
  orderedItems,
  multipleItemsHandler,
} from "../../../Store/OrdersSlice";
function AllFoodItems() {
  let foodItems = useSelector((state) => state.foodReducer);
  let dispatch = useDispatch();
  let orderedFood = useSelector(orderedItems);

  function multipleFoodHandler(id, itemName, itemPrice) {
    let similarFoodState = false;
    let index;

    orderedFood.forEach((item) => {
      if (id === item.id) {
        index = orderedFood.indexOf(item);
        similarFoodState = true;
      }
    });
    if (similarFoodState === true) {
      return dispatch(multipleItemsHandler(index));
    } else {
      let orderedItems = {
        id: id,
        name: itemName,
        price: itemPrice,
        counter: 1,
        multipleItemsPrice: itemPrice,
      };
      let orderBtnStatus = false;
      dispatch(getOrders({ orderedItems, orderBtnStatus }));
    }
  }

  return (
    <div className = {classes.foodItems}>
      {foodItems.map((data) => (
        <FoodItem
          name={data.name}
          price={data.price}
          rating={data.ratings}
          key={nanoid()}
          src={data.src}
          id={data.id}
          multipleFoodHandler={multipleFoodHandler}
        />
      ))}
    </div>
  );
}
export default AllFoodItems;
