import {useReducer} from 'react'

function Reducer() {
  const[count,dispatch]=useReducer(reducer,0)

  function reducer(count,action){

    switch(action.type){
      case "increment":
        console.log("giri")
      return count+1
      case "decrement":
        console.log("sunil")
        return count-1

        default:
          return new Error()
    }
  }
  return (
    <div>
      <h1>Reducer : {count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button> 

    </div>
  )
}

export default Reducer
