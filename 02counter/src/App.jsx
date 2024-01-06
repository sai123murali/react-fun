import { useState } from 'react'
import './App.css'

function App() {
  /* counter value */
  const [counter, setCounter]= useState(15)

  const addValue = ()=>{
    setCounter(counter + 1)
  }

  /*const removeValue = ()=> {
    setCounter(counter - 1)
  }*/
  
  /* batching */

  const removeValue = ()=> {
    setCounter((prevCounter) => (prevCounter -1))
    setCounter((prevCounter) => (prevCounter -1))
    setCounter((prevCounter) => (prevCounter -1))
    setCounter((prevCounter) => (prevCounter -1))
  }

  return (
    <>
      <h1>React Learning with Shweta Verma {counter}</h1>

      <h1>Counter :{counter}</h1>

      <button
      onClick={addValue}
      >Add Value</button>{" "}

      <button
      onClick={removeValue}
      >Remove Value</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
