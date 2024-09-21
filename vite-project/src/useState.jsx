
import  { useEffect, useState } from 'react'

function UseState() {
  const [ count, setCount] = useState (0)

  useEffect(()=>{
   document.title = ` new ${count} notification`;
  },[count])
  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={()=> setCount(count+1)}> add me</button>
    </div>
  )
}

export default UseState
