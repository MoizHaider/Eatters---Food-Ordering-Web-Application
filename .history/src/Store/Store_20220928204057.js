import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import OrderedFood from "./"
const store = configureStore({
    reducer: {
        foodReducer: foodReducer
    }
});
export default store;