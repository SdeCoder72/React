import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <p style={{fontSize:"25px"}}>React Counter</p>
    <h1>Counter: {count}</h1>
    <button onClick={()=> setCount(count-1)}>decrement</button>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    </>
  )
}
export default App;