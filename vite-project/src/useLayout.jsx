import { useLayoutEffect,useState } from "react"

function Layouteffect(){
    const [isVisible,setisvisible]=useState(false)

 useLayoutEffect(()=>{
    if(isVisible){
        return;
    }
    
 },[isVisible])
 return (
    <div>
        <button onClick={()=> setisvisible(!isVisible)}>
            {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <div>Animated Content </div>}
    </div>
 )

}
export default Layouteffect