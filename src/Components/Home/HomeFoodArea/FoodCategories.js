import { useState } from "react";
export default function FoodCategories({category,setCategory}) {
  let categories = [
    "All",
    "Chinese",
    "Pizza",
    "Burger",
    "Desi",
    "Meat",
    "Desert",
    "Salad",
    "Noodles"
  ];
  return (
    <div className="">

      <h2 className="text-3xl md:text-4xl font-semibold ">Categories</h2>
      <div className=" flex gap-4 py-4 flex-wrap">
        {categories.map((data, index) => {
          return <button key = {index} className={`${data.toLocaleLowerCase() === category.toLocaleLowerCase() ? "bg-primary text-white" : "hover:bg-primary hover:text-white" } px-4 py-1 border-primary border-2 rounded-full  transition-all `} onClick={()=>setCategory(data)}>{data}</button>;
        })}
      </div>
    </div>
  );
}
