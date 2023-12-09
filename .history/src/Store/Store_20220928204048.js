import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import Order
const store = configureStore({
    reducer: {
        foodReducer: foodReducer
    }
});
export default store;