import { useState } from "react"

function Counter() {
    const [count, setCount] = useState([10, 20, 30]);  // Non-premitive compares on the basis of reference

    function handleInc() {
        // count.push(50); // ERROR
        setCount([...count, 70])
    }
    function handleDec() {
        count.pop();
        const newCount = structuredClone(count);
        setCount(newCount)
    }

    return(
        <>
        <p>Counter project</p>
        <h1>Counter: {count}</h1>
        <button onClick={handleDec}>decrement</button>
        <button onClick={handleInc}>Increment</button>
        </>
    ) 
}

export default Counter;