import { useRef, useState } from 'react'
// import './App.css'

function App() {

  const [timer, setTimer] = useState(0);
  const intervalIdRef = useRef(null);

  function startFun() {
    if(intervalIdRef.current != null) {
      return;
    }

    intervalIdRef.current = setInterval(()=>{
      setTimer(timer => timer+1)
    },1000)
  }

  function pauseFun() {
    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null;
  }

  function resetFun() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null
    setTimer(0);

  }

  return (
    <>
    <h1>Stopwatch: {timer}</h1>
    <button onClick={startFun}>Start</button>
    <button onClick={pauseFun}>Stop</button>
    <button onClick={resetFun}>Reset</button>
    
    </>
  )
}

export default App
