import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./HomeSlice";
const store = configureStore({
    reducer: {
        foodReducer: foodReducer
    }
});
export default store;