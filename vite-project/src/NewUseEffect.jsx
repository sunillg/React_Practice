import { useState, useEffect}from "react"

function NewUseEffect() {

    const [count , setcount] = useState(0);

    useEffect(()=>{
        document.title = `New ${count} notification`
    } , [count])
  return (
    <div>
        <h1> Count Change : {count}</h1>
        <br /> 
      <button onClick={()=>setcount(count +1)}> Click</button>
      
    </div>
  )
}

export default NewUseEffect
