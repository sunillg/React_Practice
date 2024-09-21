// import { useContext } from "react"
// import { data,data1 } from "./Maincontext"

// function ChildC() {
//     const firstNmae = useContext(data);
//     const myGender = useContext(data1);
//   return (
//     <>
//     <h1> Hi my name is {firstNmae} and my gender is {myGender}</h1>
//     </>
//   )
// }

// export default ChildC

import { useContext } from "react"
import {data,data1} from "./Maincontext"
function ChildC() {

    const firstName = useContext(data);
    const lastName = useContext(data1)
  return (
    <div>
      <h1>Hi my self {firstName}, and my last name was {lastName}</h1>
    </div>
  )
}

export default ChildC

