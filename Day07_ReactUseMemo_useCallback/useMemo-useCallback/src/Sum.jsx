import React from "react";

const Sum = React.memo(({number})=>{
    function calculateSum() {
        let sum = 0; 
        for(let i = 0; i<number; i++) {
            sum+= i;
        }
        return sum;
    }
    console.log("Sum component");
    let total = calculateSum();
    return (
        <>
        <h2>The sum of {number} is</h2>
        <h2>Sum: {total}</h2>
        </>
    )
}) 

export default Sum;