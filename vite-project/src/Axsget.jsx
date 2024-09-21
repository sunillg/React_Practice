import axios from "axios"
import { useEffect, useState } from "react"


function Axsget() {
 const [userData,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    })
 

  return (
    <div>
      <h1>Get method</h1>
      {userData.map((data)=>{
        return(
            <>
            <div>
                {data.title['2']}
            </div>
            </>
            
        )
      })}
    </div>
  )
}

export default Axsget
