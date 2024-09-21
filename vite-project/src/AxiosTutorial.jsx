import axios from "axios";
import { useEffect,useState } from "react";

function AxiosTutorial(){
    const [userData,setdta]=useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            setdta(response.data)

      })
    },[])
    return(
        <div>
            <h1>
                Axios Tutorial

                {userData.map((data)=>{
                    return(
                        <>
                        <h1>{data.name}</h1>
                        
                        </>
                    )
                })}
            </h1>
        </div>
    )
}
export default AxiosTutorial