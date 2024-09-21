import { useState , useCallback } from "react"

function UseCallback() {

  const [ count , setCount]= useState(0);

  const incremet = useCallback(()=>{
    console.log(incremet)
    setCount (count +1)
  })
  return (
    <div>
      <h1>Increment btn : {count}</h1> 
      <br />
      <button onClick={incremet}>
        Click
      </button>
    </div>
  )
}

export default UseCallback





