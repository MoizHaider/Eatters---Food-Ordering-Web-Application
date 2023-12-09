import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import OrderedFoodReducers from "./OrdersSlice";
import userReducer from "../Store/"
const store = configureStore({
  reducer: {
    foodReducer: foodReducer,
    orderedFood: OrderedFoodReducers,
    userData: 
  },
});
export default store;
