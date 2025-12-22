import { useEffect, useState } from "react";
import Counting from "./Counting";

let alphaD = ["D"];
function AlphaCounterName() {

    const [alphas, setAlphas] = useState(["A", "B", "C"]);

   
    function handleChange() {
        if(alphaD.length != 0) {
            setAlphas([alphaD.pop(), ...alphas]);
        }
        else {
            alert("No more Counter Sections are allowed")
        }
        
    }
    
    return(
        <>
        <button onClick={handleChange}>Add one more Counter Section</button>
        <div>
            {alphas.map(alpha => <Counting name={alpha} key={alpha} />)}
        </div>
        </>
    )
}

export default AlphaCounterName;