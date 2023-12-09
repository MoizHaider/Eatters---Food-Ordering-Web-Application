import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";


let initialState = [
  {
    name: "Grilled Burger",
    price: 12,
    ratings: 0,
    src: "./Assets/Burger.jpeg",
    id: 1,
    
  },
  {
    name: "Italian Pizza",
    price: 20,
    ratings: 0,
    src: "./Assets/pizza.jpeg",
    id: 2
  },
  {
    name: "Grilled Cheese Burger",
    price: 12,
    ratings: 0,
    src: "./Assets/Cheese_Burger.jpeg",
    id: 3
  },
  {
    name: "Pasta",
    price: 10,
    ratings: 0,
    src: "./Assets/Pasta.jpeg",
    id: 4
  },
  {
    name: "Salad",
    price: 3,
    ratings: 0,
    src: "./Assets/Salad.jpeg",
    id: 5
  },
  {
    name: "Pastery",
    price: 5,
    ratings: 0,
    src: "./Assets/Pastery.jpeg",
    id: 6
  },
  {
    name: "Ham Burger",
    price: 10,
    ratings: 0,
    src: "./Assets/HamBurger.jpeg",
    id: 7
  },
  {
    name: "Beef",
    price: 30,
    ratings: 0,
    src: "./Assets/Beef.jpeg",
    id: 8
  },
  {
    name: "Chinese Noodles",
    price: 7,
    ratings: 0,
    src: "./Assets/chinese-food.jpg",
    id:9
  },
  {
    name: "Macronie",
    price: 7,
    ratings: 0,
    src: "./Assets/Macronit.jpeg"
  },
  {
    name: "Spicy Tinder Chicken",
    price: 15,
    ratings: 0,
    src: "./Assets/Chicken.jpeg"
  },
  {
    name: "Rice",
    price: 7,
    ratings: 0,
    src: "./Assets/Rice.jpeg"
  },
];
let foodSlice = createSlice({
    name: 'Food',
    initialState,
    reducers: {

    }
})
export default foodSlice.reducer;