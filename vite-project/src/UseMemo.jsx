import { useMemo } from "react";
import { useEffect } from "react";
import { useCallback, useReducer } from "react";



const reducer = (state, action) => {
  if (action.type === "increment") {
    const add = state.add + 1;

    return {
      ...state,
      add,
    };
  }
  if (action.type === "decrement") {
    const minus = state.minus - 1;

    return {
      ...state,
      minus,
    };
  }
};

function UseMemo() {
  const [state, dispatch] = useReducer(reducer, { add: 0, minus: 100 });

  const addFunction = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const subStractFunction = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const obj = useMemo(()=>{
	return { name: "kc" };
  },[state.add]);

  useEffect(() => {
    console.log(obj);
  }, [obj]);

  return (
    <div>
      <span>{state.add}</span>
      <br />
      <button onClick={() => addFunction()}>Addition</button>
      <br />
      <span>{state.minus}</span>
      <br />
      <button onClick={() => subStractFunction()}>Substraction</button>
    </div>
  );
} 

export default UseMemo;




