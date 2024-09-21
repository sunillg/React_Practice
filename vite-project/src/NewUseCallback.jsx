import { useState, useCallback } from "react"

function NewUseCallback() {

    const[count , setCount]=useState(0)
    
    const increment = useCallback(()=>{
        console.log(increment)
        setCount(count +1)
    },[count])
  return (
    <div>
        <h1>Increment : {count}</h1>
        <br />
        <button onClick={increment}>Click</button>
      
    </div>
  )
}

export default NewUseCallback
