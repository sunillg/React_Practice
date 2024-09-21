import { createContext, useContext, useState } from "react";

const NumberContext = createContext(null);

function DisplayNumber() {
  const value = useContext(NumberContext);
  return <h4>{value}</h4>;
}
function DisplayNumber1() {
  const value = useContext(NumberContext);
  return <h4>{value}</h4>;
}
function DisplayNumber2() {
  return (
    <>
      <DisplayNumber3 />
    </>
  );
}
function DisplayNumber3() {
  const value = useContext(NumberContext);
  return <h4>{value}</h4>;
}

function UseContextExample() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <NumberContext.Provider value={number}>
        <h1>Use Context example</h1>

        <DisplayNumber />
        <DisplayNumber1 />
        <DisplayNumber2 />

        <button onClick={() => setNumber((e) => e + 1)}>Increment</button>
        <button onClick={() => setNumber((latestValue) => latestValue - 1)}>
          Decrement
        </button>
      </NumberContext.Provider>
    </>
  );
}
export default UseContextExample;
