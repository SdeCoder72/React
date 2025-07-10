import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // We can not directly insert object/array inside Card component, we must have to store it in a variable and then use it. Dont forget the curly braces e.g: <Card newObj={myObj} />.
  const myObj = {
    name: "Shanaya",
    age: 20
  }

  const myArr = [1,2,3]
 

  return (
    <>
      <h1 className='bg-gray-600 text-pink-300 p-4 rounded-2xl mb-4'>Tailwind css</h1>
      <Card username="Anaya"/>
      <Card username="Shanaya" btnText="Visit me"/>
      <Card username="Sameer" btnText="Click me"/>

    </>
  )
}

export default App
