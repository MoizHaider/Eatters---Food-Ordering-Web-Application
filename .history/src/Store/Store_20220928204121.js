import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import OrderedFoodReducers from "./OrdersSlice"
const store = configureStore({
    reducer: {
        foodReducer: foodReducer,
        OrderedFood: or
    }
});
export default store;