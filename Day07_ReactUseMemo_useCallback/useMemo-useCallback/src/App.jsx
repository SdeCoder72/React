import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Sum from './Sum'
import Intro from './Intro';

// useMemo - memoizes the returned value (obj, array, fuction compared by reference)
// useCallback - memoizes the entire funtion
// React.memo - momoizes component's rendered output


function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000)
  console.log("App component");

  // function buttonClick() {
  //   console.log("Button Clicked");
  // }

  const buttonClick = useCallback(()=>{
    console.log("button clicked:", count);
  },[count])

  // function calculatePrime() {
  //   let total =0;
  //   if(number > 1){
  //     total++;
  //   }
  //   for(let i = 3; i<=number; i++) {
  //     total++;
  //     for(let j = 2; j<i; j++) {
  //       if(i%j == 0) {
  //         total--;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }

  // let totalPrime = calculatePrime();

  // use memo hook
  let prime = useMemo(()=>{
    let total =0;
    if(number > 1){
      total++;
    }
    for(let i = 3; i<=number; i++) {
      total++;
      for(let j = 2; j<i; j++) {
        if(i%j == 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }, [number])

  const obj = useMemo(()=>{
    return {name: "Shanaya", age: 20}
  },[])

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h2>Prime number from 2 to {number}: {prime}</h2>

      <h2>Number: {number}</h2>
      <button onClick={()=> setNumber(number+100)}>Increment Number</button>
      <Sum number={number}/>

      <button onClick={buttonClick}>Click</button>
      <Intro value={obj}/>
      
    </>
  )
}

export default App
