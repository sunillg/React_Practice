// import React from 'react'
import { useState } from 'react'

function UseState2() {
    const [count, setCount]=useState(0);
    

    const increment =()=>{
        setCount(count+1);

    }

    const decrement =()=>{
        setCount(count-1);
    }

  return (
    <div>
    <h1>Count : {count}</h1>  
    <button onClick={increment}>Add</button>
    <br />
    <button onClick={decrement}>Remove</button>
    
    </div>
  )
}

export default UseState2
