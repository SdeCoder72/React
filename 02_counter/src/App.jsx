import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = ()=> {
    console.log('value added', counter)
    if(counter < 20){
    counter++;

    //this callback function will gonna add "1" every time it's been called
    
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    }
    
    
  }

  const removeValue = ()=> {
    console.log(counter);
    if(counter > 0) {
      counter--
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter App {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
