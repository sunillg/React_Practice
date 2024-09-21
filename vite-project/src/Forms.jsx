import { useState } from "react";

 function Forms() {
    const [name, setName]= useState('')

    const handlesubmit = (event)=>{
        event.preventDefault()
        alert(`The name you enterd : ${name}`)
    }
    return (
    <div>
        <form onClick={handlesubmit}></form>
      <h1>Form</h1>
      <input type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)} />
      <button type="submit">Submit</button>
    </div>
  )
}

export default Forms
