import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getOrders,
  orderedItems,
  multipleItemsHandler,
} from "../../../Store/OrdersSlice";
import Rating from "../../Rating";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AllFoodItems({ category }) {
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
    <div className="flex w-full justify-center  py-8 px-4 gap-x-4 gap-y-8 flex-col xs:flex-row xs:flex-wrap">
      {foodItems.map((data, index) => (
        <FoodItem
          name={data.name}
          price={data.price}
          rating={data.ratings}
          key={index}
          src={data.src}
          id={data.id}
          multipleFoodHandler={multipleFoodHandler}
          selectedCategory={category}
          category={data.category}
          desc={data.desc}
        />
      ))}
    </div>
  );
}

function FoodItem(props) {
  function onAddClickHandler() {
    props.multipleFoodHandler(props.id, props.name, props.price);
  }
  if (
    props.selectedCategory.toLocaleLowerCase() != "all" &&
    props.selectedCategory.toLocaleLowerCase() !=
      props.category.toLocaleLowerCase()
  )
    return;

  return (
    <>
      <div className="flex items-center justify-center  from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3]  px-2">
        <div className="w-full   max-w-[290px] xs:max-w-[320px] md:max-w-[350px] mx-auto bg-white rounded-3xl  overflow-hidden shadow-xl">
          <div className="max-w-md mx-auto">

            <LazyLoadImage
              src={props.src}
              className="h-[200px] w-full object-cover"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              width={600}
              height={400}
              alt="Image Alt"
            />
            {/* <img
              src={props.src}
              className="h-[200px] w-full object-cover"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            /> */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-row justify-between flex-wrap">
                <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                  {props.name}
                </p>
                <p className="text-[17px] font-bold text-[#0FB478]">
                  ${props.price}
                </p>
              </div>

              <p className="text-[#7C7C80] font-[15px] ">{props.desc}</p>
              <div className="mt-2">
                <Rating rating={props.rating} />
              </div>

              <button
                onClick={onAddClickHandler}
                className="block mt-3 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------- Rating ------------------------------------------------------------------------ */}
    </>
  );
}
export default AllFoodItems;
