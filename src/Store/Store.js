import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import OrderedFoodReducers from "./OrdersSlice";
import userReducer from "../Store/ProfileSlice"
const store = configureStore({
  reducer: {
    foodReducer: foodReducer,
    orderedFood: OrderedFoodReducers,
    userData: userReducer
  },
});
export default store;
