import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  return (
    <div>
      <p>
        <button onClick={() => dispatch({ type: "INCREMENT_ONE" })}>+</button>
        {value}
        <button onClick={() => dispatch({ type: "DECREMENT_ONE" })}>-</button>
      </p>
    </div>
  );
};

export default Counter;
