
import { useState} from "react"
function NewuseState() {

    const [ number , setNumber] = useState (0);
  return (
    <div>
      <h1> Number count : {number}</h1>
      <br /> 
      <button onClick={()=>setNumber(number +1)}>Increment Number</button>
    </div>
  )
}

export default NewuseState
