export default function FoodCategories(){
    let categories = ["Fast Food", "Chinese", "Italian", "Pakistani", "Indian", "Vegan", "Meat Lovers", "Cheese Lovers", "Deserts"];
    return (
        <div className={classes.parent}>
            {categories.map(data=>{
                return <button >{data}</button>
            })}
        </div>
    )
}