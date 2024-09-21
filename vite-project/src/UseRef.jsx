// import { useRef,useEffect } from "react"

import { useEffect, useRef } from "react"

// function UseRef() {
 
//     const Ref = useRef(null)
//     useEffect(()=>{
//         Ref.current.focus();
//     },[])

//   return (
//     <>
//     <label> Name : </label>
//     <br />
//     <input type="text" ref={Ref} />
//     </>
      
    
//   )
// }
// export default UseRe

function UseRef() {

    const Ref =  useRef(null)
    useEffect(()=>{
        Ref.current.focus();

    }, [])
  return (
    <div>
        <label> Name : </label>
    <br />
   <input type="text " ref={Ref} />      
    </div>
  )
}

export default UseRef


