// import { useReducer } from "react"
//  const initial = 0;
//  const hello = (state, action)=>{
//    switch (action){
//   case "addition":
//     return state+2;
    
//     case "minus":
//         return state-2;

//         default:
//             return state
//    }
//  }
// function UseReduce() {

//     const [ count , dispatch]=useReducer(hello, initial)
//   return (
//     <div className="hi">
      
    
//       <button className="sunil" onClick={()=>dispatch("addition")}>plus</button>
//       <br />
//       <br />
//       <h1>Counting : {count}</h1>
//       <br />
//       <button className="santosh" onClick={()=>dispatch("minus")}>Minus</button>
//     </div>
//   )
// }
// export default UseReduce



import { useReducer } from "react"
 const sunil = 0;
 const santosh = (state,action)=>{
     switch(action){
      case "increment": 
      return state+1;
       case "decrement":
       return state-1
        default:
          return state
     }
 }
function UseReduce() {
 const [ count , dispatch]=useReducer(santosh,sunil);



  return (
    <div>
        <h1>Count : {count}</h1> 
        <br />
        <br />
        <button onClick={()=>dispatch("increment")}>Adding</button>
        <br />
        <br />
        <button onClick={()=>dispatch("decrement")}>Removing</button>   
    </div>
  )
}

export default UseReduce
