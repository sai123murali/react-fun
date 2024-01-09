import { useState , useEffect} from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);

  useEffect(()=>{

    /*code to be used for the effect*/
    console.log("the value of count is :",count)

    /* optional return statement used*/
    return()=>{
      console.log("the value is updated ")
    }
    
  },[count]) /*dependency state (dependent variables)*/


  return (
    <>
      <div>
        <h1>Use State and effect example</h1>
        <h2>Counter:{count}</h2>
        <button onClick={()=> setCount(count +1)}> 
          Increment 
        </button>
        <button onClick={()=> setCount(count -1)}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
