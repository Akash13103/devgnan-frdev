import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement ,reset} from "../../redux/slices/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleInc() {
    dispatch(increment());
  }
  function handleDecr() {
    dispatch(decrement());
  }
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      Counter:{count}
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
