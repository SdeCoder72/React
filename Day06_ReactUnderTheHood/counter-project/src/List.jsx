import { useState } from "react";
import Food from "./Food";

const fruits = ["Banana", "Grapes", "Fig", "Guava", "Pineapple", "Peer", "Jackfruit","Papaya"]
function List() {

    const [foodList, setFoodList] = useState(["Apple", "Mango", "Kiwi"]);

    function handleChange() {
        if(fruits.length != 0) {
            let fruit = fruits.pop();
            setFoodList([fruit, ...foodList]);
        }
        else {
            alert("Fruit List is empty")
        }        
    }
    return (
        <>
        <button onClick={handleChange}>Increment</button>
        <Food foods={foodList}></Food>
        </>
    )
}

export default List;