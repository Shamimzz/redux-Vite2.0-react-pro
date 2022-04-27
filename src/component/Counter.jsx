import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  );
};

export default Counter;
