import { useState, useMemo } from "react"

function NewUsememo() {

const[ count , setCount]=useState(0);
const[ number , setNumber]= useState(10);

const calculation = useMemo(function multiply(){
    console.warn ("Hi Sunil")
    return count
},[])
  return (
    <div>
        <h2>{calculation}</h2>
        <h1>Count : {count}</h1>
        <br />
        <button onClick={ ()=>setCount(count +1)}> For addition</button>
        <br />
        <h1>Number : {number}</h1>
        <button onClick={()=>setNumber (number *10)}> for multiplication</button>
      
    </div>
  )
}

export default NewUsememo
