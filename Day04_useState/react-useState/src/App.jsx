import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increament() {
    setCount(count+1);
  }
  return (
    <>
    <p>Count: {count}</p>
    <button onClick={increament}>Increament</button>
    </>
  )
}

export default App
