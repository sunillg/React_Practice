import  {  useMemo, useState } from 'react'

function UseEffect2() {

    const [count, setCount]=useState(0);
    const [ number, setNumber]= useState(10);
     
   const Multiply = useMemo(function MultiCount(){
    console.warn("multicount")
    return 
   },[count])
  return (  
    <div>
          <h2>{Multiply}</h2>
        <h1>Count :{count} </h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <br />
        <h1>Multiply : {number}</h1>
        <button onClick={()=>setNumber(number *10)}> Multiply</button>
      
    </div>
  )
}

export default UseEffect2
