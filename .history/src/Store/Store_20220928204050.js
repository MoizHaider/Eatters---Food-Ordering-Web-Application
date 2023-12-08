import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
import Ordered
const store = configureStore({
    reducer: {
        foodReducer: foodReducer
    }
});
export default store;