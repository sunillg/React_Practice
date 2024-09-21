import { useEffect,useState } from "react"
import axios from 'axios'

function Newaxiosget() {
   const [userData,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    },[])
  return (
    <>
    <div>
      <h1> Axios Get Method</h1>
      {userData.map((data)=>{
          return(
             <>
             <div>
                {data.name}
             </div>
             </>
          )
      })}
    </div>
    </>
  )
}

export default Newaxiosget
