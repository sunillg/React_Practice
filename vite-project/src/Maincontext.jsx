// import { createContext } from "react";
// import ChildA from "./ChildA";



// const data =createContext();
// const data1 = createContext();

// function Maincontext() {

//     const name ="Sunil";
//     const gender = "male"
//   return (
//     <>
//     <data.Provider value={name}>
//      <data1.Provider value = {gender}>
//     <ChildA/>
//     </data1.Provider>   
//     </data.Provider>
//     </>
//   )
// }

// export default Maincontext
// export {data,data1}
import { createContext } from "react"
import ChildC from "./ChildC";
// import ChildA from "./ChildA";
const data = createContext();
const data1 = createContext();


function Maincontext() {
    const name  = "Sunil";
    const Username = "lg";
  return (
    <div>
     <data.Provider value={name}>
        <data1.Provider value={Username}>
     {/* <ChildA/> */}
     <ChildC/>
     </data1.Provider>
        </data.Provider> 
    </div>
  )
}

export default Maincontext
export {data, data1}
