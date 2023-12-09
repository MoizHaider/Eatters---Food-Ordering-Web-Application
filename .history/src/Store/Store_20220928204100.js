import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import OrderedFood from "./OrdersSlice"
const store = configureStore({
    reducer: {
        foodReducer: foodReducer
    }
});
export default store;