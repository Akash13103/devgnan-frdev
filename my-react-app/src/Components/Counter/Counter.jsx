// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement ,reset} from "../../redux/slices/counterSlice";
// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   function handleInc() {
//     dispatch(increment());
//   }
//   function handleDecr() {
//     dispatch(decrement());
//   }
//   const handleReset = () => {
//     dispatch(reset());
//   };
//   return (
//     <div>
//       Counter:{count}
//       <div>
//         <button onClick={handleInc}>Increment</button>
//         <button onClick={handleDecr}>Decrement</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDecrement,
  handleIncrement,
  reset,
} from "../../Redux/Slices/CounterSlice";
export default function Counter() {
  const count = useSelector((globalState) => globalState.counter.count);
  console.log("counttt", count);
  const [inputValue, setInputValue] = useState("");
  // state
  const incrementValue = 20;
  const decrementValue = 30;
  const dispatch = useDispatch();

  // signal useDispatch()

  function handleInputChange(e) {
    console.log("setInputValue", setInputValue(e.target.value)); // this will update input correctly
    Increment();
  }

  function Increment(event) {
    debugger;
    const inputValue = event.target.value;
    console.log(inputValue);

    dispatch(handleIncrement(Number(inputValue)));

    console.log("inputValue", Number(inputValue));
  }

  function Decrement() {
    dispatch(handleDecrement(decrementValue));
  }

  function Reset() {
    dispatch(reset(0));
  }
  return (
    <>
      <div>Counter {count}</div>
      <button onClick={(event) => Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <input type="number" onChange={Increment} /> Increment value enter
      <button onClick={Reset}>Reset</button>
      {/* <button onClick={handleInputChange}>InpChange</button> */}
    </>
  );
}
